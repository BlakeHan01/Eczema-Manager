import {useDispatch} from 'react-redux';

const Diary = ({diary, setCurrentId}) => {
  const dispatch = useDispatch();

  return (
    <div className="border-solid border-2 border-red-200 m-2 p-3">
      <p>Skin Quality:</p>
      <p>{diary.skinQuality}</p>
      <p>Sleep Quality:</p>
      <p>{diary.sleepQuality}</p>
      <p>Mood:</p>
      <p>{diary.mood}</p>
      <p>Allergen:</p>
      <p>{diary.allergen}</p>
      <p>Activities:</p>
      <p>{diary.activities}</p>
      <p>Message:</p>
      <p>{diary.message}</p>
    </div>
  )
}

export default Diary