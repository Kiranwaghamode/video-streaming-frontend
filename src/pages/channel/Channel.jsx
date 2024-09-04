import React, { useContext, useEffect, useState } from 'react'
import './Channel.css'
import Videocard from '../../components/videoCard/Videocard'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Tweet from '../../components/tweet/Tweet'
import Cookies from 'js-cookie'
import axios from 'axios'
import { UserContext } from '../../context/userContext'


const Channel = () => {

    const { currentUser } = useContext(UserContext);

    const { username } = useParams();
    const [data, setdata] = useState({})
    const accessToken = Cookies.get('accessToken');
    const [userVideos, setuserVideos] = useState([])
    const [showSelected, setshowSelected] = useState(false)
    const [Tweets, setTweets] = useState([])


  useEffect(() => {
    ;(async()=>{
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URI}/users/c/${username}`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              },  {withCredentials: true });
            
              if(response.data){
                  setdata(response.data.data);
              }
        } catch (error) {
            console.log("ERROR: ", error)
        }
    })()
  }, [accessToken])
  
  useEffect(() => {
   ;(async()=>{
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URI}/videos/get-user-videos/${username}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },  {withCredentials: true });
      setuserVideos(response.data.data)
    } catch (error) {
      console.log("Error while fetching user videos: ", error)
    }


   })()

   
   ;(async()=>{
    try {
      const accessToken = Cookies.get('accessToken')
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/tweets/get-user-tweets/${username}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },  {withCredentials: true });
        if(response.data){
          setTweets(response.data.data)
        }
    } catch (error) {
      console.log("Error while fetching tweets")
    }




   })()


  }, [])
  





    const title = "how to make attractive thumbnail"
    const channel = "vishwa mohan"
    const image = "https://static-cse.canva.com/blob/1564545/1600w-wK95f3XNRaM.jpg"
    const avatar = "https://yt3.googleusercontent.com/uclnYWF-f4jg3UvWLURUontXRPA5zINeaN-67uwZYrUq93xgDvEGUZkvDiYwjKEGB9f5lVxL8g=s120-c-k-c0x00ffffff-no-rj"



  return (
   <>
  <Navbar/>
   <div className="channel-profile">
      <div className="cover-image">
        <img src={data?.coverImage} alt="Cover" />
      </div>
      <div className="profile-details">
        <div className="avatar">
          <img src={data?.avatar} alt="Avatar" />
        </div>
        <div className="info">
          <h1 className="full-name">{data?.fullname}</h1>
          <h2 className="username">@{data?.username}</h2>
          <p className="subscribers">Subscribers: {data?.subscribersCount}</p>
          <button className={`subscribe-button ${ data?.isSubscribed ? 'subscribed': ''}`}>{data?.isSubscribed ? 'Subscribed' : "Subscribe"}</button>
        </div>
      </div>
    </div>

    <div className="channel-videos">
        <div className="video-tweet">
          <div className={`section ${!showSelected ? 'selected-section' : ''}`} onClick={()=> setshowSelected(false)}>
            <img src="/assets/video.png" alt="" />
            <h3>Videos</h3>
          </div>
          <div className={`section ${showSelected ? 'selected-section' : ''}`} onClick={()=> setshowSelected(true)}>
          <img src="/assets/twitter.png" alt="" />
            <h3>Tweets</h3>
          </div>
        </div>
        <div className="show-videos">
          { !showSelected ?
            userVideos.map((video, index)=>(
              <Link to={`/video/${video._id}`} id='video-channel-Link'>
              <Videocard title={video.title} key={index}  imgUrl={video.thumbnail} />
              </Link>
            )) : ''
          }
          { showSelected ? 
            Tweets.map((tweet)=>(
            <Tweet content={tweet.content} tweetId={tweet._id} key={tweet._id}/>
           )) : ""
          }
        </div>
    </div>
   
   
   </>
  )
}

export default Channel