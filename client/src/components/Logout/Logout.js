import React from 'react'

const Logout = ({setCurrentUser}) => {
    const onSubmit = (e)=>{
        e.preventDefault();
        setCurrentUser(null);
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="submit" value="Logout"/>
        </form>
    </div>
  )
}

export default Logout