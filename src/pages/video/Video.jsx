import React from 'react'
import './Video.css'
const Video = () => {
  return (
    <>
    <div className="video-page">
      <div className="video-container">
        <video className="video-player" controls>
          <source src="http://res.cloudinary.com/dxvmi7pp8/video/upload/v1718259130/yyfexm99maytul7utmjv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-details">
        <h1 className="video-title">how to make ringtone</h1>
        <p className="video-description">how to make ringtone</p>
        <div className="video-actions">
          <button className="like-button" >Like </button>
          <button className="dislike-button" >Dislike </button>
        </div>
      </div>
      <div className="comment-section">
        <h2 className="comment-title">Comments</h2>
        <form className="comment-form" >
          <textarea
            className="comment-input"
            placeholder="Add a comment"
          />
          <button className="comment-submit" type="submit">Submit</button>
        </form>
        <div className="comments-list">
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Video