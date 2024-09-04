import React, { useEffect, useState } from 'react'
import './Content.css'
import Videocard from '../videoCard/Videocard'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Content = () => {

    const title = "how to make attractive thumbnail"
    const channel = "mortal"
    const image = "http://res.cloudinary.com/dxvmi7pp8/image/upload/v1718259084/mbpprbmnkqknzlqi7yfr.jpg"
    const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC41flzoZC1EQy1ms3tEysWhuIJ_2EfXw3A&s"

    const [videos, setvideos] = useState([])
    
    useEffect(() => {
      const accessToken = Cookies.get('accessToken')
      ;(async()=>{
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URI}/videos/get-all-videos`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },  {withCredentials: true });

          if(response.data){
            setvideos(response.data.data.videos)
          } 
        } catch(error){
          console.log("ERROR", error)
        }
      })()
    }, [])
    


  return (
    <>
    <div className="content-main">
        
        {
          videos.map((video)=>(
            <Link to={`/video/${video._id}`} id='video-link' >
            <Videocard title={video.title} channel={channel} imgUrl={video?.thumbnail} avatar={avatar}/>
            </Link>
          ))
        }



    </div>
    
    
    </>
  )
}


//imgurl: https://static-cse.canva.com/blob/1564545/1600w-wK95f3XNRaM.jpg
//avatar: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC41flzoZC1EQy1ms3tEysWhuIJ_2EfXw3A&s

export default Content