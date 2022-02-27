import axios from "axios";
import router from "@/router";

axios.defaults.baseURL =""

//请求拦截器
axios.interceptors.request.use((config)=>{
    return config
})
//响应拦截器
axios.interceptors.response.use(res =>{
    
})
