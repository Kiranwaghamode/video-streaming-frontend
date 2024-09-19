import React, { useContext, useState } from 'react'
import './VideoUpload.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import { UserContext } from '../../context/userContext'

const VideoUpload = ({closeModal}) => {


  const { videoUploadFlag, setvideoUploadFlag } = useContext(UserContext)


  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [thumbnail, setthumbnail] = useState(null)
  const [videoFile, setvideoFile] = useState(null)
  const [isLoading, setisLoading] = useState(false)


  const handleVideoUpload = async (event) =>{
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail);
    formData.append('videoFile', videoFile);

    
    try {
      setisLoading(true)
      const accessToken = Cookies.get('accessToken')
      const response = await axios.post(`${process.env.REACT_APP_API_URI}/videos/publish-video`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
             Authorization: `Bearer ${accessToken}`,
        }
        }, { withCredentials: true });
      
      if(response.data){
        console.log(response.data)
        closeModal()
        setisLoading(false)
        setvideoUploadFlag(!videoUploadFlag)
      }
    } catch (error) {
      console.log("Video Upload Error: ", error)
      setisLoading(false)
      
    }

  }




  return (
    <>
    <div className="modal">
      <div className="upload-modal-content">
        <span className="close-btn" onClick={closeModal} >&times;</span>
        <h2> Upload Video</h2>
        <form  onSubmit={handleVideoUpload}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="video-upload-title"
              onChange={(e)=> settitle(e.target.value)}
              required
            />
          </div>
          

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="video-upload-description"
              rows="3"
              onChange={(e)=> setdescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail Image</label>
            <input
              type="file"
              id="video-thumbnail"
              onChange={(e)=> setthumbnail(e.target.files[0])}
              accept="image/*"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="video">Video File</label>
            <input
              type="file"
              id="video-input"
              accept="video/*"
              onChange={(e)=> setvideoFile(e.target.files[0])}
              required
            />
          </div>

          <button type="submit" id='video-upload-button' disabled={isLoading ? true : false}>{ isLoading ? <><i class="fa fa-spin fa-solid fa-rotate-right"></i>      
          uploading</>   : 'Upload Video'}</button>
        </form>
      </div>
    </div>
    
    
    </>
  )
}

export default VideoUpload