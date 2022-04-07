import { useSelector } from 'react-redux';

import Diary from './Diary/Diary';

const Diarys = ({setCurrentId}) => {
// code for testing whether I have React duplcates
//   window.React2 = require('react');
// console.log(window.React1 === window.React2);
    //state.diarys is from reducers/index
  const diarys = useSelector((state) => state.diarys);
  return (
      !diarys.length ? 'nothing to be shown': 
        <div>
          {diarys.map((diary)=>
            <div key={diary._id}>
              
              <Diary diary={diary} setCurrentId={setCurrentId}/>
            </div>
          )}
        </div>
  )
}

export default Diarys