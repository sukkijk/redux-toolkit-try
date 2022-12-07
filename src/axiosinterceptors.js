import axios from 'axios'
export const instance= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts"
})

instance.interceptors.request.use((config)=>{
    return config;
},
(err)=>{
    return err;
})

instance.interceptors.response.use((res)=>{
    if(res.status === 200){
        console.log("Get Success")
    }
    return res;
},
(err)=>{
    return err;
})