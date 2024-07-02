import React from 'react'
import './PlayListCard.css'
const PlayListCard = ({title, image}) => {
  return (
    <>
    <div className="playlist-box">
        <div className="img-container">
            <img className='playlist-image' id='img1' src={image} alt="" />
            <img id='img2' className='playlist-image' src={image} alt="" />
            <img id='img3' className='playlist-image' src={image} alt="" />
        </div>
        <h5>{title}</h5>
        
    </div>
    
    
    </>
  )
}

export default PlayListCard