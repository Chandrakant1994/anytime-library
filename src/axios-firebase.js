import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://firstone-95f3e.firebaseio.com/'
})

export default instance;