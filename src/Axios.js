import axios from 'axios';

const instance=axios.create({
    baseURL: "http://localhost:8000"
})

export default instance


//http://localhost:8000
//https://converterbase64.herokuapp.com