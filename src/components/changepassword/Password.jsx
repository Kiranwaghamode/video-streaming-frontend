import React, { useEffect, useState } from 'react'
import './Password.css'
import Cookies from 'js-cookie'
import axios from 'axios'

const Password = ({openChangePassword}) => {

  const [oldPassword, setoldPassword] = useState('')
  const [newPassword, setnewPassword] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [showErrorModal, setshowErrorModal] = useState(false)


  const handleChangePassword = async(e)=>{
    e.preventDefault()
    try {
      setisLoading(true)
      const accessToken = Cookies.get('accessToken')
        const response = await axios.post(`${process.env.REACT_APP_API_URI}/users/change-password`,{
          oldPassword: oldPassword,
          newPassword: newPassword
        }, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },  {withCredentials: true });
        if(response.data){
          console.log(response.data)
          openChangePassword()
          setisLoading(false)
        }
  } catch (error) {
    console.log("Error while changing the password")
    setisLoading(false)
    setshowErrorModal(true)
  }
  }
  


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
              onChange={(e)=> setoldPassword(e.target.value)}
              required
            />
          </label>
          <label className="password-modal-label">
            New Password:
            <input
              className="password-modal-input"
              type="password"
              onChange={(e)=> setnewPassword(e.target.value)}
              required
            />
          </label>
          <div className="password-modal-buttons">
            <button className="password-modal-submit" type="submit" onClick={(e)=>handleChangePassword(e)}>{ isLoading ? <><i class="fa fa-spin fa-solid fa-rotate-right"></i>      
              Loading</> :'Change Password'}</button>
            <button className="password-modal-cancel" type="button" onClick={openChangePassword} >Cancel</button>
          </div>
        </form>
      </div>
    </div>


    { showErrorModal &&
      <div id="modal" >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <p>Invalid oldPassword</p>
        <button className="close-button" onClick={()=> setshowErrorModal(false)}>Okay</button>
      </div>
    </div>
    }
    
    
    </>
  )
}

export default Password