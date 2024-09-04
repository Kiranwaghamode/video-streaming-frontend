import React, { useEffect, useState } from 'react'
import './Tweet.css'
import axios from 'axios'
const Tweet = ({content, tweetId}) => {
    const [isTweetLiked, setisTweetLiked] = useState(false)

    useEffect(() => {
        
    //   ;(async ()=>{
    //     try {
    //     const accessToken = Cookies.get('accessToken')
    //     const response = await axios.get(`${process.env.REACT_APP_API_URI}/likes/is-tweet-liked/${tweetId}`, {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     },  {withCredentials: true });
    //     setisTweetLiked(response.data.data.isLiked)
    //     } catch (error) {
    //         console.log("Error while fetching tweets!")
    //     }
    //   })()

    }, [])
    

  return (
   <>
    <div className="tweet-box">
      <div className="tweet-content">
        <p>{content}</p>
      </div>
      <div className="tweet-actions">
        <button className="like-button">Like</button>
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
   
   </>
  )
}

export default Tweet