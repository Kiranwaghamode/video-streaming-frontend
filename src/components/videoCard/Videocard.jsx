import React from 'react'
import './Videocard.css'
const Videocard = ({title, channel, imgUrl, avatar}) => {
  return (
    <>
    <div className="video-card-main">
        <img src={imgUrl} id='thumbnail' alt="" />
        <h5>{title}</h5>
       <div className="card-channel">
       {/* <img src={avatar} alt="" />
       <span>{channel}</span> */}
       </div>
    </div>
    
    </>
)
}


export default Videocard