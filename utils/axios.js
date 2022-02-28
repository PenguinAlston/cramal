import axios from "axios";
import router from "@/router";
import { ElMessage } from "element-plus";

axios.defaults.baseURL =""


// 默认 post 请求，使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

//请求拦截器
axios.interceptors.request.use((config)=>{
    return config
})
//响应拦截器
axios.interceptors.response.use(res =>{
    // 返回接口类型数据为 object类型
    if(typeof res.data != 'obeject'){
        ElMessage.error('服务端异常！')
        return Promise.reject(res)
    }
    //后台接口返回格式resultCode ,message data
    if(res.data.resultCode != 200){
        if(res.data.message) ElMessage.error(res.data.message) 
        if(res.data.resultCode ==419){
            router.push({ path: '/login'})
        }
        return Promise.reject(res.data)
    }
    return res.data.data
})

export default axios