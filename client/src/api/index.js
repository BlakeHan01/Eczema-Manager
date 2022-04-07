import axios from "axios";

const url = 'http://localhost:5000/diarys'

export const fetchDiarys = ()=> axios.get(url);
export const createDiary = (newDiary) =>axios.post(url, newDiary);