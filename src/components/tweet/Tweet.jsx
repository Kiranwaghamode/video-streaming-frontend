import React, { useEffect, useState } from 'react'
import './Tweet.css'
import axios from 'axios'
import Cookies from 'js-cookie'




const Tweet = ({content, tweetId, isUserEligible, settweetEdit, tweetEdit}) => {

    const [isTweetLiked, setisTweetLiked] = useState(false)
    const [isEdit, setisEdit] = useState(false)
    const [editedTweet, seteditedTweet] = useState('')


    const handleEdit = async()=>{

      try {
          const accessToken = Cookies.get('accessToken')
          const response = await axios.patch(`${process.env.REACT_APP_API_URI}/tweets/update-tweet/${tweetId}`,{content: editedTweet}, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },  {withCredentials: true });
          if(response.data){
            settweetEdit(!tweetEdit)
            setisEdit(false)
          }

      } catch (error) {
        console.log("Error while Editing the tweet")
      }


    }

    const handleDelete = async()=>{
      try {
          const accessToken = Cookies.get('accessToken')
          const response = await axios.delete(`${process.env.REACT_APP_API_URI}/tweets/delete-tweet/${tweetId}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },  {withCredentials: true });
          if(response.data){
            settweetEdit(!tweetEdit)
          }

      } catch (error) {
        console.log("Error while deleting the tweet")
      }
    }


    const toggleTweetLike = async()=>{
      try {
        try {
          const accessToken = Cookies.get('accessToken')
          const response = await axios.patch(`${process.env.REACT_APP_API_URI}/likes/toggle-tweet-like/${tweetId}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },  {withCredentials: true });
          setisTweetLiked(response.data.data.isLiked)
          console.log(response.data)
          } catch (error) {
              console.log("Error while fetching tweets!")
          }
      } catch (error) {
        console.log("Error while Toggle the Tweet like")
      }

    }

    
    useEffect(() => {
        
      ;(async ()=>{
        try {
        const accessToken = Cookies.get('accessToken')
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/likes/is-tweet-liked/${tweetId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },  {withCredentials: true });
        setisTweetLiked(response.data.data.isLiked)
        } catch (error) {
            console.log("Error while fetching tweets!")
        }
      })()

    }, [])
    

  return (
   <>
    <div className="tweet-box">
      <div className="tweet-content">
        { !isEdit ? <p>{content}</p> :
        <div id='tweet-edit'>
        <input type='text'  placeholder='Enter updated Tweet' required onChange={(e)=>seteditedTweet(e.target.value)} />
        <span onClick={handleEdit}>send</span>
        </div> }
      </div>
      <div className="tweet-actions">
        <button className="like-button" onClick={toggleTweetLike}>{ isTweetLiked ? "Liked" : "Like" }</button>
        { isUserEligible ? 
        <button className="edit-button" onClick={()=> setisEdit(!isEdit)}>{ isEdit ? "Cancel" : "Edit"}</button>
        : ""}

        { isUserEligible ? 
        <button className="delete-button" onClick={handleDelete}>Delete</button> : ""}
        
      </div>
    </div>
   
   </>
  )
}

export default Tweet