import React, { useContext } from 'react'
import './Register.css'
import { UserContext } from '../../context/userContext'

const Register = () => {

  const { setloggedIn } = useContext(UserContext)



  return (
    <>
    <div className="modal">
      <div className="modal-content">
        <span className="close" >&times;</span>
        <h2>Register</h2>
        <form >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className='register-input'
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className='register-input'
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className='register-input'
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar:</label>
            <input
              type="file"
              id="avatar"
              className='register-input'
              name="avatar"
              accept="image/*"
            />
          </div>
          <div className="form-group">
            <label htmlFor="coverImage">Cover Image:</label>
            <input
              type="file"
              className='register-input'
              id="coverImage"
              name="coverImage"
              accept="image/*"
            />
          </div>
          <button type="submit" id='register-button'>Register</button>
        </form>
        <button  className="login-button">Already have an account? Log in</button>
      </div>
    </div>
    </>
  )
}

export default Register