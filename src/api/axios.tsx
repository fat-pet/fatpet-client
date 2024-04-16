import axios from "axios";


const api= axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
    headers:{
        'Content-Type' : 'application/json'
    }
});

export async function login(id : string, password : string){
    return await api.post('/api/members/signin',{
        loginId : id,
        password  : password
    })
}

export async function join(email: string, loginId:string, password:string, nickname:string){
    return await api.post('api/members/signup',{
        email:email,
        loginId:loginId,
        password:password,
        nickname:nickname
    })
}