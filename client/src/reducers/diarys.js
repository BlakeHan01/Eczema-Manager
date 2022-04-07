export default (diarys = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...diarys, action.payload];
        default:
            return diarys;
    }
}