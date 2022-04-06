import {useEffect} from 'react';
import { useDispatch} from 'react-redux';

import { getDiarys } from './actions/diarys';
import Diarys from './components/Diarys/Diarys'
import Forms from './components/Forms/Forms';
const App = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getDiarys());
    }, [dispatch])
    return (
        <div >
            <Diarys />
            <Forms />
        </div>
    )
}

export default App;