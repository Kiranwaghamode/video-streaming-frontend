import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';

const Login = ({toggleModal}) => {

  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


 const handleLogin = async(e)=>{
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8000/api/v1/users/login', {
      email: email,
      password: password
    });
    
    // Assuming the API returns a token or user data on successful login
    if (response.data) {
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., save token, redirect, etc.)
    }
  } catch (error){
    console.log("Error While logging in ", error);
  }
 }


  return (
    <>
    <div className="login-modal">
      <div className="login-modal-content">
        <span className="login-close" >&times;</span>
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
          <button type="submit" className="login-button">Login</button>
          <button type="submit" className="login-button" onClick={toggleModal}>Register</button>
        </form>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Login