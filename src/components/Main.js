import React,{useState,useEffect} from 'react'
import Axios from '../Axios'
import './Main.css'
import Download from 'downloadjs'
import Swal from 'sweetalert2'
import Lottie from 'react-lottie'
import {connect} from 'react-redux'
import {setClick,setJson} from './redux/Json/Json-action'
import File from './File.json'

function Main({dispatch,currentJson,currentClick}) {
    const [showButton,setShowButton]=useState(false)
    const [name,setName] = useState('')
    const [click,SetClick] = useState(false)

    useEffect(()=>{
        Axios.get("/initial").then(res=>{
            console.log(res.data)
        })
    },[])

    const upload=async (e)=>{
        e.preventDefault();
        const files = e.target.files;
        console.log(files[0])
        const data = new FormData();
        data.append("file",files[0])
        Axios.post("/upload",data).then(res=>{
            console.log(res.data.message)
            setShowButton(true)
            setName(res.data.name)
        })
    }
    
    const update = ()=>{
        SetClick(true)
        Axios.post("/update",{name:name}).then(res=>{
            console.log("Done!")
            console.log(res.data.name,res.data.JsonFileName,res.data.JsonData)
            if(res.data.JsonData){
                dispatch(setClick(true))
                dispatch(setJson(JSON.parse(res.data.JsonData)))
            }
            let data ={
                name: res.data.name,
                JsonFileName: res.data.JsonFileName
            }
            Axios.post("/compress",data,{responseType: 'blob'}).then(response => {
                console.log("got al files in api ");
                console.log(response)
                var Name = Date.now()+'-output.json'
                Download(response.data,Name)
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully updated!',
                }).then(()=>{
                    window.location.reload()
                })
            }).catch(()=>{
                Swal.fire({
                    icon: 'warning',
                    title: 'Something went wrong...'
                }).then(()=>{
                    window.location.reload()
                })
            })
        }).catch(()=>{
            Swal.fire({
                icon: 'warning',
                title: 'Something went wrong...'
            }).then(()=>{
                window.location.reload()
            })
        })
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: currentJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }    
    }

    return (
        <div className="container">
            <h1 className="">Upload Zip Folder</h1>
            <input className="custom-file-upload" type="file" accept=".zip" onChange={(e)=>upload(e)} />
            {
                showButton?<button className={!click?"button":"disableButton"} onClick={update}><b>{click?<i class="fa fa-circle-o-notch fa-spin"></i>:''} Update</b></button>:""
            }
            {
                currentClick?(
                    <Lottie
                        options={defaultOptions}
                        
                        />
                ):null
            }
        </div>
    )
}

const mapStateToProps=(state)=>({
    currentClick: state.user.currentClick,
    currentJson: state.user.currentJson
})

export default connect(mapStateToProps,null)(Main)
