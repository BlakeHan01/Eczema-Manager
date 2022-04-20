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
        <div className="flex w-full m-20 mt-4">
            <Diarys className="flex-1 w-1/2" setCurrentId={setCurrentId}/>
            <Forms className="flex-auto" currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
    )
}

export default App;