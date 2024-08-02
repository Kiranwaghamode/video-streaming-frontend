import React, { useContext, useState } from 'react'
import './Avatar.css'
import { UserContext } from '../../context/userContext'
import axios from 'axios'
import Cookies from 'js-cookie';


const Avatar = ({closeModal}) => {
    
    const [avatar, setavatar] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const { setCurrentUser, currentUser } = useContext(UserContext)



    const handleAvatar = async()=>{
        const formData = new FormData();
        formData.append('avatar', avatar )


        try {
            setisLoading(true);
            const accessToken = Cookies.get("accessToken");
            console.log(accessToken)            
            const response = await axios.patch(`${process.env.REACT_APP_API_URI}/users/avatar`,formData , {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${accessToken}`
                    }
            }, {withCredentials: true })
            

            setCurrentUser(response.data.data)
            console.log(response.data.data)
            setisLoading(false)
            closeModal()
        } catch (error) {
            console.log("Cover Image Error:", error)
            setisLoading(false)
            
        }
    }

  return (
   <>
   {/* onSubmit={handleSubmit}
   */}
   <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Update Avatar</h2>
        <form  className="modal-form" >
          <div className="form-group">
            <label htmlFor="avatar-file-input" className="form-label">Choose an image:</label>
            <input
              type="file"
              id="avatar-file-input"
              className="file-input"
              accept="image/*"
              onChange={(e)=> setavatar(e.target.files[0])}
              required={true}
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="modal-button submit-button"  disabled={ isLoading ? true : false} onClick={handleAvatar}>Update Avatar</button>
            <button type="button" className="modal-button cancel-button" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
   
   </>
  )
}

export default Avatar