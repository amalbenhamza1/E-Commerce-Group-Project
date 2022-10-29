import React from 'react'

const register = () => {
  return (
    <div className='register-wrapper'>
      <h1>Please Sign Up</h1>
      <label>
        <p>Username</p>
        <input type="text"/>
      </label>
      <label>
        <p>Email</p>
        <input type="text"/>
      </label>
      <label>
        <p>Password</p>
        <input type="password"/>
      </label>
      <label>
        <p>Password2</p>
        <input type="password"/>
      </label>
      <div>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default register
