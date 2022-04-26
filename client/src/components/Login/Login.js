import React from 'react'
import axios from 'axios';
import {fetchUser} from '../../api'
import {useState} from 'react';
const Login = ({setCurrentUser}) => {
    const user = {};
    const [err, setErr] = useState('');
    const onSubmit = async(e)=>{
        e.preventDefault();
        setErr('');
        try{
            const {data} = await fetchUser(user);
            if(data.username){
                setCurrentUser(data);
            } else{
                setCurrentUser(null);
            }
        } catch (error){
            setErr('Username or password incorrect');
        }
    }
  return (
     
    <div className="bg-white mt-40 ml-5 hover:rounded-md border-pink-300 border-2 px-5 py-3">
        {!!err && <div className=' font-bold text-red-300 border-1 border-lime-800 rounded'>{err}</div> }
        {!!err && <div className=' font-bold text-red-300 border-1 border-lime-800 rounded'>{'Kindly re-enter both username and password'}</div> } 
        {!err && <h1 className='my-2 mr-2'>Enter Username and Password to login!</h1> }
        {/* <h2>{{error}}</h2> */}
        <form onSubmit={onSubmit}>
                <div className='my-2 mr-2'>Username: <input type="text" name="username" onChange={(e)=> user.username = e.target.value}/>	</div>
                <div className='my-2 mr-2'>Password: <input type="password" name="password" onChange={(e)=> user.password = e.target.value}/>	</div>
                <input className=" bg-white mt-3 hover:rounded hover:bg-blue-200 border-pink-300 border-2 px-1" type="submit" value="Login"/>	
        </form>
    </div>
  )
}

export default Login