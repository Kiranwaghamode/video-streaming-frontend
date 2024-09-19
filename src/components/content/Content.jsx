import React, { useContext, useEffect, useState } from 'react'
import './Content.css'
import Videocard from '../videoCard/Videocard'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext'


const Content = () => {


    const {showWatchHistory, videoUploadFlag, authenticated} = useContext(UserContext)
    const [videoHistory, setvideoHistory] = useState([])

    const channel = "mortal"
    const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC41flzoZC1EQy1ms3tEysWhuIJ_2EfXw3A&s"

    const [videos, setvideos] = useState([])
    
    useEffect(() => {
      ;(async()=>{
        try {
          const accessToken = Cookies.get('accessToken')
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


      ;(async()=>{

        try {
          const accessToken = Cookies.get('accessToken')
          const response = await axios.get(`${process.env.REACT_APP_API_URI}/users/history`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },  {withCredentials: true });
          if(response.data){
            setvideoHistory(response.data.data)
          }

        } catch (error) {
          console.log("Error while fetching watch history!")
        }
      })()

    }, [videoUploadFlag, authenticated])
    


  return (
    <>

    { !showWatchHistory ?
    <div className="content-main">
      {
      !authenticated ? <><div className="before-login"><h2>PLEASE LOGIN BEFORE USING THIS WEB APP</h2> 
      <span>Email: test@gmail.com</span>
      <span>Password: test</span></div>
      </> : ''
    }
        { authenticated ?
          videos.map((video)=>(
            <Link to={`/video/${video._id}`} id='video-link' >
            <Videocard title={video.title} channel={channel} imgUrl={video?.thumbnail} avatar={avatar}/>
            </Link>
          ))
          : ""
        }
        
    </div> : ""
  }

    {
      showWatchHistory ? 
      <div className="content-main">
        
         {
          videoHistory.map((video)=>(
            <Link to={`/video/${video._id}`} id='video-link' >
            <Videocard title={video.title} channel={channel} imgUrl={video?.thumbnail} avatar={avatar}/>
            </Link>
          ))
        }
        
      </div>
      : ""

      
    }

    

    
    </>
  )
}


//imgurl: https://static-cse.canva.com/blob/1564545/1600w-wK95f3XNRaM.jpg
//avatar: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC41flzoZC1EQy1ms3tEysWhuIJ_2EfXw3A&s

export default Content