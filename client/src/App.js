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
    const [diarys, setDiarys] = useState([]);
    useEffect(()=>{
        // console.log(currentUser.diarys, ' current diarys');
        if(currentUser){
          setDiarys(currentUser.diarys)
        }
      }, [currentUser])
    useEffect(()=>{
        if(currentUser){
          getDiarys(currentUser)
        }
      }, [currentUser])
    // useEffect( () => {
    //     dispatch(getDiarys(currentUser));
    // }, [currentId, dispatch])
    return (
        <div className="flex w-full m-20 mt-4">
            {!currentUser && <div className="flex items-center">
                <Register setCurrentUser={setCurrentUser}/>
                <Login setCurrentUser={setCurrentUser}/>
            </div>}
            {currentUser ?  <>
                <Diarys className="flex-1 w-1/2" diarys={diarys} currentUser={currentUser} setCurrentId={setCurrentId}/>
                <Forms className="flex-auto" diarys={diarys} setDiarys={setDiarys} currentUser={currentUser} currentId={currentId} setCurrentId={setCurrentId}/>
                <Logout setCurrentUser={setCurrentUser}/>
            </>:
            ''
            
            }
        </div>
    )
}

export default App;