import axios from "axios";

const url = process.env.NODE_ENV === 'PRODUCTION' ? 'https://eczema-forum.herokuapp.com/diarys' : 'http://localhost:5000/diarys'

export const fetchDiarys = ()=> axios.get(url);
export const createDiary = (newDiary) =>axios.post(url, newDiary);
export const updateDiary = (id, updatedDiary) => axios.patch(`${url}/${id}`, updatedDiary);