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

export async function createPet(sex:string, name:string, species:string, breedsName:string, birthDate:string, neutered:boolean, feedCalories:number){
    return await api.post('/api/pets',{
        sex,name,species,breedsName,birthDate,neutered,feedCalories
    })
}

export async function getPetList(){
    // return await api.get('/api/pets')
    return axios.get('/mockJson/petList')
}

export async function deletePet(id : number){
    return api.delete(`/api/pets/${id}`)
}