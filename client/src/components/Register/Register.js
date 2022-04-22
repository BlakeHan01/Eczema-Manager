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
            setErr(error.message);
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div>
        {!!err && <p>{err}</p>}
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
            <div>username: <input type="text" name="username" onChange={(e)=> newUser.username = e.target.value}/>	</div>
            <div>password: <input type="password" name="password" onChange={e=> newUser.password = e.target.value}/>	</div>
            <input type="submit"/>	
        </form>
        {isLoading && <p>it's loading</p>}
    </div>
  )
}

export default Register