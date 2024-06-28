import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className="login-modal">
      <div className="login-modal-content">
        <span className="login-close" >&times;</span>
        <h2>Login</h2>
        <form >
          <div className="login-form-group">
            <label htmlFor="login-email">Email:</label>
            <input
              type="email"
              id="login-email"
              className="login-input"
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="login-password">Password:</label>
            <input
              type="password"
              id="login-password"
              className="login-input"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Login