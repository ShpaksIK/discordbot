import axios from "axios";
import Cookies from 'js-cookie';

export const API_URL = "http://localhost:8080/api/"
const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer}`
    return config
})

export default $api