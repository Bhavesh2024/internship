import React from 'react'
import { useContext } from 'react'
import { RouteContext } from '../context/RouteContextProvider'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {isLogin,setLogin} = useContext(RouteContext);
  const [loginData,setLoginData] = useState({
    email:"",
    password:"",
  });
  const navigate = useNavigate();

  const handleInput = (e) =>{
    const {name,value} = e.target;

    setLoginData({...loginData,[name]:value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const email = 'bparmar1722004@gmail.com'
    const password = 'Bhavesh@1724'
    if(loginData.email == email){
          if(loginData.password == password){
             setLogin(!isLogin);
             localStorage.setItem('isLogin','true')
             navigate('/dashboard')
          } else{
             alert('Password is Invalid');
          }
    } else{
       alert("Email is Invalid")
    }

  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend style={{textAlign:"center"}}>Login</legend>
          <input type="email" name='email' className='form-input' placeholder='Email' value={loginData.email} onChange={handleInput} required /><br/>
          <input type="email" name='password' className='form-input' placeholder='Password' value={loginData.password} onChange={handleInput} required />
          <div className="submit">
              <button>Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Login
