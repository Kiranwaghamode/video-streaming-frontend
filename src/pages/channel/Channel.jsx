import React, { useContext, useEffect, useState } from 'react'
import './Channel.css'
import Videocard from '../../components/videoCard/Videocard'
import { Link, useLocation, useParams } from 'react-router-dom'
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
    const [tweetEdit, settweetEdit] = useState(false)
    const [User, setUser] = useState({})
    const [tweetCreate, settweetCreate] = useState(false)
    const [tweetContent, settweetContent] = useState('')
    const [toggleSubscription, settoggleSubscription] = useState({})
    let usereligible;
    // let User;


    const handleSubscription = async()=>{
      try {
        const accessToken = Cookies.get('accessToken')
            const response = await axios.patch(`${process.env.REACT_APP_API_URI}/subscription/subscription-toggle/${User._id}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },  {withCredentials: true });
            if(response.data){
              settoggleSubscription(response.data.data)
            }
      } catch (error) {
        console.log("error while toggle the subscription")
      }


    }



    const handleTweetCreation = async ()=>{
      try {
            const accessToken = Cookies.get('accessToken')
            const response = await axios.post(`${process.env.REACT_APP_API_URI}/tweets/create-tweet/`,{content: tweetContent}, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },  {withCredentials: true });
            if(response.data){
              settweetCreate(!tweetCreate)
              settweetEdit(!tweetEdit)
            }
      } catch (error) {
        console.log("Error while creating the tweet!")
      }
    }

    useEffect(() => {
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
    }, [tweetEdit])
    



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
  }, [accessToken, toggleSubscription])
  
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
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/users/get-user/${username}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },  {withCredentials: true });
        if(response.data){
          setUser(response.data.data.user)
        }
    } catch (error) {
      console.log("Error while fetching the user")
    }


   })()
  }, [])
  
  if(currentUser._id === User._id){
    // setisUserEligible(true)
    usereligible=true
  }else{
    // setisUserEligible(false)
    usereligible=false
  }

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
          <button className={`subscribe-button ${ data?.isSubscribed ? 'subscribed': ''}`} onClick={handleSubscription} >{data?.isSubscribed ? 'Subscribed' : "Subscribe"}</button>
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
          { usereligible ?
          <div className="section " onClick={()=> settweetCreate(!tweetCreate)}>
          <img src="/assets/social.png" alt="" id='add-tweet' />
          <h3>Tweet+</h3>
        </div>: ""}
        </div>
        { tweetCreate ?
          <div className="create-tweet">
            <input type="text" onChange={(e)=> settweetContent(e.target.value)} />
            <img src="/assets/next.png" alt="" onClick={handleTweetCreation} />
          </div> : ""
        }
        
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
            <Tweet content={tweet.content} tweetId={tweet._id} key={tweet._id} isUserEligible={usereligible} settweetEdit={settweetEdit} tweetEdit={tweetEdit}/>
           )) : ""
          }
        </div>
    </div>
   
   
   </>
  )
}

export default Channel