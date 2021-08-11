import React,{useState,useEffect} from 'react'
import Axios from '../Axios'
import './Main.css'
import Download from 'downloadjs'
import Swal from 'sweetalert2'

function Main() {
    const [showButton,setShowButton]=useState(false)
    const [name,setName] = useState('')
    const [click,setClick] = useState(false)

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
        setClick(true)
        Axios.post("/update",{name:name}).then(res=>{
            console.log("Done!")
            console.log(res.data.name,res.data.JsonFileName)
            let data ={
                name: res.data.name,
                JsonFileName: res.data.JsonFileName
            }
            Axios.post("/compress",data,{responseType: 'blob'}).then(response => {
                console.log("got al files in api ");
                console.log(response)
                var Name = Date.now()+'-output.zip'
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

    return (
        <div className="container">
            <h1 className="">Upload Zip Folder</h1>
            <input className="custom-file-upload" type="file" accept=".zip" onChange={(e)=>upload(e)} />
            {
                showButton?<button className={!click?"button":"disableButton"} onClick={update}><b>{click?<i class="fa fa-circle-o-notch fa-spin"></i>:''} Update</b></button>:""
            }
        </div>
    )
}

export default Main
