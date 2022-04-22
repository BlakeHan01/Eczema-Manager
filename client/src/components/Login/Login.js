import React from 'react'
import axios from 'axios';
import {fetchUser} from '../../api'
const Login = ({setCurrentUser}) => {
    const user = {};
    const onSubmit = async(e)=>{
        e.preventDefault();
        const {data} = await fetchUser(user);
        if(data.username){
            setCurrentUser(data);
        } else{
            setCurrentUser(null);
        }
    }
  return (
    <div>
        <h1>Login</h1>
        {/* <h2>{{error}}</h2> */}
        <form onSubmit={onSubmit}>
                <div>username: <input type="text" name="username" onChange={(e)=> user.username = e.target.value}/>	</div>
                <div>password: <input type="password" name="password" onChange={(e)=> user.password = e.target.value}/>	</div>
                <input type="submit" value="login"/>	
        </form>
    </div>
  )
}

export default Login