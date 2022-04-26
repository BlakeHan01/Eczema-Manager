import axios from "axios";

const url = process.env.NODE_ENV === 'PRODUCTION' ? 'https://eczema-forum.herokuapp.com/diarys' : 'http://localhost:5000/diarys'
// const url = 'https://eczema-forum.herokuapp.com/diarys'
export const fetchDiarys = (user)=> axios.get(`${url}/${user._id}`, {withCredentials: true});
export const createDiary = (user, newDiary) =>axios.post(url, [newDiary, user], {withCredentials: true});
export const updateDiary = (user, id, updatedDiary) => axios.patch(`${url}/${user._id}/${id}`, [updatedDiary, user], {withCredentials: true});

const url2 = process.env.NODE_ENV === 'PRODUCTION' ? 'https://eczema-forum.herokuapp.com/users' : 'http://localhost:5000/users'
export const fetchUser = (user)=> axios.post(`${url2}/Login`, user);
export const createUser = (newUser)=> axios.post(`${url2}/Register`, newUser);