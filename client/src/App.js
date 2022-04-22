import {useState, useEffect} from 'react';
import { useDispatch} from 'react-redux';

import { getDiarys } from './actions/diarys';
import Diarys from './components/Diarys/Diarys'
import Forms from './components/Forms/Forms';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import {fetchUser, createUser} from './api'
const App = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);
    const [currentUser, setCurrentUser] = useState(null);
    // useEffect( () => {
    //     dispatch(getDiarys());
    // }, [currentId, dispatch])
    return (
        <div className="flex w-full m-20 mt-4">
            {!currentUser && <>
                <Register setCurrentUser={setCurrentUser}/>
                <Login setCurrentUser={setCurrentUser}/>
            </>}
            {currentUser ?  <>
                <Diarys className="flex-1 w-1/2" currentUser={currentUser} setCurrentId={setCurrentId}/>
                <Forms className="flex-auto" currentId={currentId} setCurrentId={setCurrentId}/>
                <Logout setCurrentUser={setCurrentUser}/>
            </>:
            'nothing to be shown'
            
            }
        </div>
    )
}

export default App;