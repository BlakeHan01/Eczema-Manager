import { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {createDiary, postDiary, updateDiary} from '../../actions/diarys'
const Forms = ({setDiarys, diarys, currentUser, currentId, setCurrentId}) => { 
	const [postDiary, setPostDiary] = useState({
		skinQuality:'', sleepQuality:'', mood:'', allergens:'', activities:'', message:''
	});
	const diary = useSelector((state) => (currentId ? currentUser.diarys.find((message)=> message._id == currentId) : null));
	const dispatch = useDispatch();
	const [err, setErr] = useState('');
	useEffect(()=>{
		if(diary) {
			setPostDiary(diary)
		}
	}, [diary])

	const clear = () => {
		setCurrentId(0);
		setPostDiary({skinQuality:'', sleepQuality:'', mood:'', allergens:'', activities:'', message:''});
	}
	const onSubmit = async (e)=>{
		e.preventDefault();
		setErr('');
		if(postDiary.skinQuality === null || postDiary.skinQuality === '' || postDiary.skinQuality === undefined){
			setErr('Please have something down for your skin quality :)')
		} else{
			if(currentId===0){
				dispatch(createDiary(currentUser, postDiary));
				setDiarys([...diarys, postDiary]);
			} else{
				console.log(diarys);
				dispatch(updateDiary(currentUser, currentId, postDiary))
				setDiarys(diarys.map(e=>{
					if(e._id === postDiary._id){
						return e= postDiary;
					} else{
						return e;
					}
				}));
			}
		}
		clear();
	}

	return (
		
		<form className="px-4 py-4 bg-transparent" onSubmit={onSubmit}>
			{!!err && <div className='text-red-300 border-2 border-brown-400 font-bold bg-white'>{err}</div>}
			<div className="grid grid-cols-1 grid-rows border-2 hover:border-3 bg-white">
				<h2 className="ml-2 mt-2 mb">skin quality</h2>
				<input type="text" value={postDiary.skinQuality} onChange={(e) => setPostDiary({...postDiary, skinQuality:e.target.value})} placeholder="redness on neck and face" className="w-[46rem] mx-2 mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
				<h2 className="ml-3 mt-2 mb">sleep quality</h2>
				<input type="text" value={postDiary.sleepQuality} onChange={(e) => setPostDiary({...postDiary, sleepQuality:e.target.value})} placeholder="8 hours of sleep!" className="w-[46rem] mx-2 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
				<h2 className="ml-3 mt-2 mb">mood</h2>
				<input type="text" value={postDiary.mood} onChange={(e) => setPostDiary({...postDiary, mood:e.target.value})} placeholder="a bit stressed because of work" className="w-[46rem] mx-2 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
				<h2 className="ml-3 mt-2 mb">allergens</h2>
				<input type="text" value={postDiary.allergens} onChange={(e) => setPostDiary({...postDiary, allergens:e.target.value})} placeholder="perfume sprayed, went to a dog park" className="w-[46rem] mx-2 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
				<h2 className="ml-3 mt-2 mb">activities</h2>
				<input type="text" value={postDiary.activities} onChange={(e) => setPostDiary({...postDiary, activities:e.target.value})} placeholder="running, leetcoding" className="w-[46rem] mx-2 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
				<h2 className="ml-3 mt-2 mb">comments</h2>
				<textarea type="text" value={postDiary.message} onChange={(e) => setPostDiary({...postDiary, message:e.target.value})} placeholder="Feels better than yesterday! Maybe because my mood is better and my sleep quality is better" className="w-[46rem] pl-3 pt-3 mx-2 mb-3 resize-y mt-1 block pd-10 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
				<input type="submit" value="Save diary" className="w-[7rem] bg-sky-600 hover:bg-sky-700 rounded px-2 py-1 mb-3 ml-2" />
				<button onClick={clear} className="w-[7rem] bg-red-600 hover:bg-red-700 rounded px-2 py-1 mb-3 ml-2" >clear</button>
			</div>
			
		</form>
	)
}

export default Forms;