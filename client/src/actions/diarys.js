import * as api from '../api/index.js';

// Actions creators
export const getDiarys = () => async(dispatch) => {
    try {
        // data is in the response object
        const { data } = await api.fetchDiarys();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }

    
}

//async dispatch is to make sure that the api interaction is synchronous
export const createDiary = (diary) => async(dispatch) => {
    try {
        const {data}  = await api.createDiary(diary);
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log('error is ', error);
    }
}

export const updateDiary = (id, diary) => async(dispatch) => {
    try{
        const {data} = await api.updateDiary(id, diary);
        dispatch({type: 'UPDATE', payload: data})
    } catch(error) {
        console.log('error is', error);
    }
}