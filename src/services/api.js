import axios from 'axios'

const ip = 'https://shorten-kingaspx.herokuapp.com/api/'

const api = axios.create({
    baseURL: ip
})

api.defaults.headers = {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
};

export default api;
