import React, { useEffect, useState } from 'react'
import './Channel.css'
import Videocard from '../../components/videoCard/Videocard'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
const Channel = () => {

    const { username } = useParams();

    const [data, setdata] = useState({})
  
    const accessToken = Cookies.get('accessToken');

  useEffect(() => {
    ;(async()=>{
        try {
            console.log("hello chanel")
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
  




    const title = "how to make attractive thumbnail"
    const channel = "vishwa mohan"
    const image = "https://static-cse.canva.com/blob/1564545/1600w-wK95f3XNRaM.jpg"
    const avatar = "https://yt3.googleusercontent.com/uclnYWF-f4jg3UvWLURUontXRPA5zINeaN-67uwZYrUq93xgDvEGUZkvDiYwjKEGB9f5lVxL8g=s120-c-k-c0x00ffffff-no-rj"



  return (
   <>
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
        <h3>For You</h3>
        <div className="show-videos">
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        </div>
    </div>
   
   
   </>
  )
}

export default Channel