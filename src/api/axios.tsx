import axios from 'axios';
import setInterceptors from './apiInterceptor';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

setInterceptors(api);

export async function login(id: string, password: string) {
  return await api.post('/api/members/signin', {
    loginId: id,
    password: password,
  });
}

export async function join(
  email: string,
  loginId: string,
  password: string,
  nickname: string,
) {
  return await api.post('api/members/signup', {
    email: email,
    loginId: loginId,
    password: password,
    nickname: nickname,
  });
}

export async function resign() {
  return await api.delete('/api/members');
}

export async function editMember(email: string, nickname: string) {
  return await api.put('/api/members', {
    email: email,
    nickname: nickname,
  });
}

export async function getDup(id: string, nickname: string) {
  return await api.get(`/api/members/check?loginId=${id}&nickname=${nickname}`);
}

// Pet 관련 API
export async function createPet(
  sex: string,
  name: string,
  species: string,
  breedsName: string,
  birthDate: string,
  neutered: boolean,
  feedCalories: number,
) {
  return await api.post('/api/pets', {
    sex,
    name,
    species,
    breedsName,
    birthDate,
    neutered,
    feedCalories,
  });
}

export async function getPetList() {
  return await api.get('/api/pets');
  // return axios.get('/mockJson/petList')
}

export async function deletePet(id: number) {
  return api.delete(`/api/pets/${id}`);
}

export async function editPet(
  name: string,
  neutered: boolean,
  feedCalaories: number,
  id: number,
) {
  return api.put(`/api/pets/${id}`, {
    name,
    neutered,
    feedCalaories,
  });
}

export async function getPetResult(id: number) {
  return api.get(`/api/diagnoses?petId=${id}`);
}

// 비만도 진단 API

export async function postPetDiagnoses(
  petId: number,
  weight: number,
  neckCirc: number,
  chestCirc: number,
) {
  return api.post('/api/diagnoses', {
    petId,
    weight,
    neckCirc,
    chestCirc,
    feedAmount: 50,
  });
}

export async function postDiagnoses(
  age: string,
  breed: string,
  weight: number,
  neckCirc: number,
  chestCirc: number,
  feedAmount: number,
) {
  return api.post('/api/diagnose/trial', {
    age,
    breed,
    weight,
    neckCirc,
    chestCirc,
    feedAmount,
  });
}

//게시판
export async function getPost() {
  return api.get('/api/posts');
}

export async function postPost(title: string, content: string) {
  return api.post('/api/posts', {
    title,
    content,
  });
}

export async function getPostContent(id: number) {
  return api.get(`/api/posts/${id}`);
}

export async function deletePost(id: number) {
  return api.delete(`/api/posts/${id}`);
}

export async function putPost(id: number, title: string, content: string) {
  return api.put(`/api/posts/${id}`, {
    title,
    content,
  });
}

export async function postComment(
  postId: number,
  content: string,
  parentId?: number,
) {
  return api.post(`/api/posts/${postId}/comments`, {
    content,
    parentId,
  });
}

export async function deleteComment(commentId: number) {
  return api.delete(`/api/posts/comments/${commentId}`);
}
