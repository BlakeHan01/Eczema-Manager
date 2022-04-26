import { useSelector } from 'react-redux';
import {useState, useEffect} from 'react';
import Diary from './Diary/Diary';
import { getDiarys } from '../../actions/diarys';

const Diarys = ({diarys, currentUser, setCurrentId}) => {
// code for testing whether I have React duplcates
//   window.React2 = require('react');
// console.log(window.React1 === window.React2);
    //state.diarys is from reducers/index
    // console.log(currentUser);

    // const [diarys, setDiarys] = useState([]);
    // useEffect(()=>{
    //   console.log(currentUser.diarys, ' current diarys');
    //   if(currentUser){
    //     setDiarys(currentUser.diarys)
    //   }
    // }, [currentUser.diarys])
  return (
      !diarys.length ? 'nothing to be shown': 
        <div className="bg-transparent w-1/2 border-2 border-blue-400 border-opacity-50">
          {diarys.map((diary)=>
            <div key={diary._id}>
              <Diary diary={diary} setCurrentId={setCurrentId}/>
            </div>
          )}
        </div>
  )
}

export default Diarys