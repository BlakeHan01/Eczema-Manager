export default (diarys = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...diarys, action.payload];
        case 'UPDATE':
            return diarys.map((diary) => diary._id === action.payload._id ? action.payload : diary);
        default:
            return diarys;
    }
}