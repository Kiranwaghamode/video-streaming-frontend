import React from 'react'
import './Password.css'
const Password = () => {
  return (
    <>
    <div className="password-modal-overlay">
      <div className="password-modal">
        <h2 className="password-modal-title">Change Password</h2>
        <form className="password-modal-form" >
          <label className="password-modal-label">
            Old Password:
            <input
              className="password-modal-input"
              type="password"
              required
            />
          </label>
          <label className="password-modal-label">
            New Password:
            <input
              className="password-modal-input"
              type="password"
              required
            />
          </label>
          <div className="password-modal-buttons">
            <button className="password-modal-submit" type="submit">Change Password</button>
            <button className="password-modal-cancel" type="button" >Cancel</button>
          </div>
        </form>
      </div>
    </div>
    
    
    </>
  )
}

export default Password