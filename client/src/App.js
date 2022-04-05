import {useEffect} from 'react';
import { useDispatch} from 'react-redux';

import { getDiarys } from './actions/diarys';

// import Forms from './components/Forms/Forms';
function App() {
    const dispatch = useDispatch;

    useEffect( () => {
        dispatch(getDiarys());
    }, [dispatch])
    return (
        <div className="bg-green-50">
            hi
        </div>
    )
}

export default App;