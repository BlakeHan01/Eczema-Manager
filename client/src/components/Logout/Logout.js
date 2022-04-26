import React from 'react'

const Logout = ({setCurrentUser}) => {
    const onSubmit = (e)=>{
        e.preventDefault();
        setCurrentUser(null);
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input className="bg-white mt-3 hover:rounded hover:bg-pink-200 border-pink-300 border-2 px-2 py-0.5" type="submit" value="Logout"/>
        </form>
    </div>
  )
}

export default Logout