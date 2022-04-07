import {useState, useEffect} from 'react';
import { useDispatch} from 'react-redux';

import { getDiarys } from './actions/diarys';
import Diarys from './components/Diarys/Diarys'
import Forms from './components/Forms/Forms';
const App = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);
    useEffect( () => {
        dispatch(getDiarys());
    }, [currentId, dispatch])
    return (
        <div >
            <Forms currentId={currentId} setCurrentId={setCurrentId}/>
            <Diarys currentId={setCurrentId}/>
        </div>
    )
}

export default App;