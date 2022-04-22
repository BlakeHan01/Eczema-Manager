import axios from "axios";

const url = process.env.NODE_ENV === 'PRODUCTION' ? 'https://eczema-forum.herokuapp.com/diarys' : 'http://localhost:5000/diarys'
// const url = 'https://eczema-forum.herokuapp.com/diarys'
export const fetchDiarys = ()=> axios.get(url);
export const createDiary = (newDiary) =>axios.post(url, newDiary);
export const updateDiary = (id, updatedDiary) => axios.patch(`${url}/${id}`, updatedDiary);

const url2 = process.env.NODE_ENV === 'PRODUCTION' ? 'https://eczema-forum.herokuapp.com/users' : 'http://localhost:5000/users'
export const fetchUser = (user)=> axios.post(`${url2}/Login`, user);
export const createUser = (newUser)=> axios.post(`${url2}/Register`, newUser);