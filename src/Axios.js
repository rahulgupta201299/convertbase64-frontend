import axios from 'axios';

const instance=axios.create({
    baseURL: "https://convertbase64-backend.herokuapp.com"
})

export default instance


//http://localhost:8000
//https://convertbase64-backend.herokuapp.com/