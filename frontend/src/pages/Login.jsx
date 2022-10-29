import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './css design/Login.css'
export default function Login() {
  const [credentials, setcredantial] = useState({email:'',password:'',username:''});
   let navigate = useNavigate()

  const login=async(e)=>{
    // e.preventDefault()
    if(credentials.email.length)
    {
        var t = credentials;
        delete t.username
        setcredantial(t)
    }
    else if (!credentials.email.length){
        var t = credentials;
        delete t.email
        setcredantial(t)
    }
  
   await axios.post('http://localhost:3002/products/login',credentials).then((resp)=>{
        
        localStorage.setItem('resp',JSON.stringify(resp.data))
    }).catch(err=>console.log(err))

    navigate('/products')
  }
  

  return(
    <div className='main'> 
     <div className="login-wrapper">
     <h1>Please Log In</h1>
     <form>
        <div className='user-wrapper'>
        <input type="text" onChange={e =>  {
            if(e.target.value.includes('@')){setcredantial({...credentials,email:e.target.value})}
             else{setcredantial({...credentials,username:e.target.value})} }}/> 
             <label>Username or Email</label>
        </div>
        <div className='user-wrapper'>
        <input type="password" onChange={e =>  {
            if(e.target.value.includes('@')){setcredantial({...credentials,email:e.target.value})}
             else{setcredantial({...credentials,username:e.target.value})} }}/> 
             <label>Password</label>
        </div>
        <div className='btn'>
            <div ></div>
          <button  onClick={()=>login()}>Log In</button>
        </div>
        <p>Don't have an account? <a href='#'>Register</a></p>
     </form>
     </div>
    </div>
    
  )
}

