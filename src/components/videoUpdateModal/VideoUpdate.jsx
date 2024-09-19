import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import './videoUpdate.css'
import axios from 'axios';



const VideoUpdate = ({ onClose, videoId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [isLoading, setisLoading] = useState(false)


  const formData = new FormData();
  formData.append('thumbnail', thumbnail )
  formData.append('title', title)
  formData.append('description', description)


  
  const updateVideo = async () =>{
    try {
        setisLoading(true)
        const accessToken = Cookies.get('accessToken')
        const response = await axios.patch(`${process.env.REACT_APP_API_URI}/videos/update-video/${videoId}`, formData , {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },  {withCredentials: true });

        if(response.data){
            console.log(response.data)
            onClose()
            setisLoading(false)
        }



    } catch (error) {
        console.log("UPDATE ERROR: ", error)
        setisLoading(false)
    }
  }



  return (
    <div className="video-update-modal-overlay">
      <div className="video-update-modal-container">
        <div className="video-update-modal-header">
          <h2>Update Video Details</h2>
        </div>
        <div className="video-update-modal-body">
          <div className="video-update-modal-field">
            <label htmlFor="video-title" className="video-update-modal-label">Title</label>
            <input
              type="text"
              id="video-title"
              className="video-update-modal-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="video-update-modal-field">
            <label htmlFor="video-description" className="video-update-modal-label">Description</label>
            <textarea
              id="video-description"
              className="video-update-modal-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="video-update-modal-field">
            <label htmlFor="video-thumbnail" className="video-update-modal-label">Thumbnail</label>
            <input
              type="file"
              id="video-thumbnail"
              className="video-update-modal-input"
              accept="image/*"
              onChange={(e)=>setThumbnail(e.target.files[0])}
            />
          </div>
        </div>
        <div className="video-update-modal-footer">
          <button className="video-update-modal-button" onClick={updateVideo}>{ isLoading ?<><i class="fa fa-spin fa-solid fa-rotate-right"></i>      
            Loading</> : "Save"}</button>
          <button className="video-update-modal-button video-update-modal-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default VideoUpdate;
