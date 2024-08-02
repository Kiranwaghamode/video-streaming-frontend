import React, { useContext, useState } from 'react'
import './CoverImage.css'
import axios from 'axios'
import { UserContext } from '../../context/userContext'
import Cookies from 'js-cookie';

const CoverImage = ({setShowCoverImage}) => {

    const [coverImg, setcoverImg] = useState(null)
    const [cookies, setcookies] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const { setCurrentUser, currentUser } = useContext(UserContext)

    const handleCoverImage = async()=>{
        const formData = new FormData();
        formData.append('coverImage', coverImg )


        try {
            setisLoading(true);
            const accessToken = Cookies.get("accessToken");
            // console.log(allCookies)            
            const response = await axios.patch(`${process.env.REACT_APP_API_URI}/users/cover-image`,formData , {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${accessToken}`
                    }
            }, {withCredentials: true })
            

            setCurrentUser(response.data.data)
            console.log(response.data.data)
            setShowCoverImage(false)  
            setisLoading(false)
        } catch (error) {
            console.log("Cover Image Error:", error)
            setisLoading(false)
        }
    }


  return (
    <>
    <div className="modal-overlay" id="modal-overlay">
      <div className="modal-content" id="modal-content">
    <span className="cover-close" onClick={()=> setShowCoverImage(false) } >&times;</span>
        <h2>Upload Cover Image</h2>
        <form>
          <label htmlFor="coverImage">Cover Image</label>
          <input 
            type="file" 
            id="coverImage" 
            name="coverImage" 
            required
            onChange={(e)=>{ setcoverImg(e.target.files[0])}}
          />
          <button id='coverImg-button' type="button" disabled={isLoading ? true : false} onClick={handleCoverImage} >change cover image</button>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default CoverImage