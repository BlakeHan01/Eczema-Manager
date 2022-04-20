import {useDispatch} from 'react-redux';

const Diary = ({diary, setCurrentId}) => {
  const dispatch = useDispatch();

  return (
    <div className="border-solid border-2 border-red-200 m-2 p-3 bg-white">
      <p className="font-mono inline-block mr-20">Skin Quality: <i className="font-light hover:font-semibold font-mono">{diary.skinQuality}</i></p>
      
      <p className="font-mono">Sleep Quality: <i className="font-light hover:font-semibold font-mono">{diary.sleepQuality}</i></p>
      <p className="font-mono">Mood: <i className="font-light hover:font-semibold font-mono">{diary.mood}</i></p>
      <p className="font-mono">Allergen: <i className="font-light hover:font-semibold font-mono">{diary.allergens}</i></p>
      <p className="font-mono">Activities: <i className="font-light hover:font-semibold font-mono">{diary.activities}</i></p>
      <p className="font-mono">Message: <i className="font-light hover:font-semibold font-mono">{diary.message}</i></p>
      <input type="button" onClick={()=>{setCurrentId(diary._id)}} value="Edit your diary" className="mt-3 inline-block text-sm text-violet-700
      mr-4 py-2 px-4 rounded-full border-0 font-semibold
      bg-violet-50 hover:bg-violet-100" />
    </div>
  )
}

export default Diary