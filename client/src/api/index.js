import axios from "axios";

const url = 'https://eczema-forum.herokuapp.com/diarys'

export const fetchDiarys = ()=> axios.get(url);
export const createDiary = (newDiary) =>axios.post(url, newDiary);