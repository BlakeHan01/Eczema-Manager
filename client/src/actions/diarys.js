import * as api from '../api/index.js';

// Actions creators
export const getDiarys = (user) => async(dispatch) => {
    try {
        // data is in the response object
        const { data } = await api.fetchDiarys(user);
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log('error is', error.message);
    }

    
}

//async dispatch is to make sure that the api interaction is synchronous
export const createDiary = (user, diary) => async(dispatch) => {
    try {
        const {data}  = await api.createDiary(user, diary);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log('error is ', error);
    }
}

export const updateDiary = (user, id, diary) => async(dispatch) => {
    try{
        const {data} = await api.updateDiary(user, id, diary);
        dispatch({type: 'UPDATE', payload: data})
    } catch(error) {
        console.log('error is', error);
    }
}

