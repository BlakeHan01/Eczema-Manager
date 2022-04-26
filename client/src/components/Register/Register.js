import React from 'react'
import {createUser } from '../../api';
import { useState } from 'react';

const Register = ({setCurrentUser}) => {
    const newUser = {};
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async(e) => {
        e.preventDefault();
        setErr('');
        console.log(newUser);
       
        try {
            setIsLoading(true);
            const {data} = await createUser(newUser);
            setCurrentUser(data);
        } catch (error) {
            setErr('Username already registered!');
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div className='bg-white mt-40 hover:rounded-md border-pink-300 border-2 px-5 py-3 mr-4 ml-96 place-content-center'>
        {!!err && <p className='font-bold text-red-300 border-1 border-lime-800 rounded'>{err}</p>}
        {!err && <h1 className='my-2 mr-2'>Register Here!</h1>}
        <form onSubmit={onSubmit}>
            <div className='my-2 mr-2'>Username: <input type="text" name="username" onChange={(e)=> newUser.username = e.target.value}/>	</div>
            <div className='my-2 mr-2'>Password: <input type="password" name="password" onChange={e=> newUser.password = e.target.value}/>	</div>
            <input className=" bg-white mt-3 hover:rounded hover:bg-blue-200 border-pink-300 border-2 px-1" type="submit"/>	
        </form>
        {isLoading && <p>It's loading</p>}
    </div>
  )
}

export default Register