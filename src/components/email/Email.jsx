import React, { useContext, useState } from 'react'
import './Email.css'
import { UserContext } from '../../context/userContext'
import axios from 'axios'
import Cookies from 'js-cookie';


const Email = ({onRequestClose}) => {

    const [email, setemail] = useState('')
    const [fullname, setfullname] = useState('')
    const [isLoading, setisLoading] = useState(false)

    const { currentUser, setCurrentUser } =useContext(UserContext)
    

    const handleEmailSubmit = async(event) =>{
        event.preventDefault();
      
        try {
            setisLoading(true)
            const accessToken = Cookies.get("accessToken");
            const response = await axios.patch(`${process.env.REACT_APP_API_URI}/users/update-account`, {
              email: email,
              fullname: fullname
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            }, {withCredentials: true });

            if(response.data){
                // console.log(response.data)
                const user = response.data.data
                setCurrentUser(user);   
                console.log(currentUser)  
                setisLoading(false)
                onRequestClose()
            }

        } catch (error) {
            console.log("Error while Updating Email and Fullname")
            setisLoading(false)
        }
    }


  return (
    <>
     <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Update User Details</h2>
        <form  className="modal-form" onSubmit={handleEmailSubmit}>
          <div className="form-group">
            <label htmlFor="email-input" className="form-label">Email:</label>
            <input
              type="email"
              id="email-input"
              className="text-input"
              required={true}
              onChange={(e)=> setemail(e.target.value)}

            />
          </div>
          <div className="form-group">
            <label htmlFor="fullname-input" className="form-label">Full Name:</label>
            <input
              type="text"
              id="fullname-input"
              className="text-input"
              required={true}
              onChange={(e)=> setfullname(e.target.value)}
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="modal-button submit-button" disabled={ isLoading ? true : false} >Submit</button>
            <button type="button" className="modal-button cancel-button" onClick={onRequestClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
    
    
    </>
  )
}

export default Email