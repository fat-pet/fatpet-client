import axios from "axios";


const api= axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
    headers:{
        'Content-Type' : 'application/json'
    }
});


if (localStorage.getItem('token')) {
    api.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }

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

export async function editMember(email : string, nickname:string){
    return await api.put('/api/members',{
        email:email,
        nickname: nickname
    })
}

export async function resign(){
    return await api.delete('/api/members')
}

export async function checkdup(id:string, nickname:string){
    return await api.get(`/api/members/check?loginId=${id}&nickname=${nickname}`)
}