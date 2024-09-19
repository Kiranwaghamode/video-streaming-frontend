import React, { useContext, useState } from 'react'
import './Login.css'
import axios from 'axios';
import { UserContext } from '../../context/userContext';
import Cookies from 'js-cookie';

const Login = ({toggleSignIn, showErrorModal}) => {


  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


  const { 
    loggedIn, 
    setloggedIn , 
    currentUser, 
    setCurrentUser,
    userLogin
  } = useContext(UserContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setisLoading] = useState(false);

  

 const handleLogin = async(e)=>{
  e.preventDefault();

  try {
    setisLoading(true)
    const response = await axios.post(`${process.env.REACT_APP_API_URI}/users/login`, {
      email: email,
      password: password
    });
    // console.log(process.env.REACT_APP_API_URI);
    
 
    if(response.data){
      // console.log('Login successful:', response.data);
      localStorage.setItem('currentUser', JSON.stringify(response.data.data.user));
      const user = response.data.data.user
      setCurrentUser(user);   
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;

      // document.cookie = `accessToken=${accessToken}; path=/`;
      // document.cookie = `refreshToken=${refreshToken}; path=/`;
      setCookie('accessToken', accessToken, 7);  
      setCookie('refreshToken', refreshToken, 7); 
      
      toggleSignIn()
      setloggedIn(true)
      setisLoading(false)
    }
  } catch (error){
    console.log("ERROR WHILE LOGGING IN ", error);
    setisLoading(false)
    showErrorModal();
  }
 }


  return (
    <>
    <div className="login-modal">
      <div className="login-modal-content">
        <span className="login-close" onClick={toggleSignIn} >&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="login-form-group">
            <label htmlFor="login-email">Email:</label>
            <input
              type="email"
              id="login-email"
              className="login-input"
              required
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="login-password">Password:</label>
            <input
              type="password"
              id="login-password"
              className="login-input"
              required
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button type="submit" disabled={isLoading ? true : false}   className={`login-button ${isLoading ? 'login-loading' : ''}`}>{ isLoading ?<><i class="fa fa-spin fa-solid fa-rotate-right"></i>      
          Loading</> : "Login"}</button>
        </form>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Login