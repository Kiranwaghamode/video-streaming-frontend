import React, { useContext, useEffect, useState } from 'react'
import './Video.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Navbar from '../../components/navbar/Navbar'
import Comment from '../../components/comment/Comment'
import Error from '../../components/Error/Error'
import { UserContext } from '../../context/userContext'
import VideoUpdate from '../../components/videoUpdateModal/VideoUpdate.jsx'
import Yesorno from '../../components/yesorno/Yesorno.jsx'



const Video = () => {

  const { currentUser } = useContext(UserContext)
  const navigate = useNavigate()

  const { videoId }   = useParams()
  const [obj, setObj] = useState({});
  const [isLiked, setisLiked] = useState(false);
  const [content, setcontent] = useState('')
  const [newComment, setnewComment] = useState('')
  const [comments, setcomments] = useState([])
  const [commentDelete, setcommentDelete] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [commentDeleteError, setcommentDeleteError] = useState(false)
  const [isUpdateModalOpen, setisUpdateModalOpen] = useState(false)
  const [showDeleteModal, setshowDeleteModal] = useState(false)
  const [videoOwner, setvideoOwner] = useState({})

  let isEligible = false;


  const setUpdateModal = () =>{
    setisUpdateModalOpen(!isUpdateModalOpen)
  }

  const deleteModal = () =>{
    setshowDeleteModal(!showDeleteModal)
  }


  const handleVideoDelete = async () =>{
    try {
      setisLoading(true)
      const accessToken = Cookies.get('accessToken')
      const response = await axios.delete(`${process.env.REACT_APP_API_URI}/videos/delete-video/${videoId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },  {withCredentials: true });

      if(response.data){
        console.log(response.data)
        deleteModal()
        setisLoading(false)
        navigate('/')
      }
    } catch (error) {
      console.log("Error while deleting the video!")
      setisLoading(false)
      deleteModal()

    }



  }


  const handleLikes = async()=>{
    try {
      const accessToken = Cookies.get('accessToken')
      const response = await axios.patch(`${process.env.REACT_APP_API_URI}/likes/toggle-video-like/${videoId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },  {withCredentials: true });
      setisLiked(response.data.data.isLiked)
      // console.log(isLiked)

    } catch (error) {
      console.log("Like Error: ", error)
    }
  }

  const handleComment = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URI}/comments/add-comment/${videoId}`, {
        content: content
      }, {withCredentials: true });
      setnewComment(response.data.data.content)
      console.log(newComment)
      // console.log(response.data.data.content);
      setcontent('')
      
    } catch (error) {
      console.log("ERROR: ", error)
    }
  }


  const handleCommentDelete = async(commentId)=>{
    try {
      setisLoading(true)
      const accessToken = Cookies.get('accessToken')
      const response = await axios.delete(`${process.env.REACT_APP_API_URI}/comments/delete-comment/${commentId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },  {withCredentials: true });
      console.log(response.data)
      setcommentDelete(!commentDelete)
      setisLoading(false)
    } catch (error) {
      console.log("Comment delete Error: ", error)
      commentDeleteError(true);
      setisLoading(false)
    }

  }

  const closemodal = ()=>{
    setcommentDeleteError(false)
  }

  
  if(currentUser._id === obj.owner){
    isEligible = true;
  }
 



  useEffect(() => {
    const videoLoad = async()=>{
      // setObj({name: "kiran"})
      try {
        const accessToken = Cookies.get('accessToken')
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/videos/get-video/${videoId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },  {withCredentials: true });
  
        // console.log(response.data.data)
        if(response.data){
          const data = await response.data.data
          setObj(data) 
        }
       
        // console.log(response.data.data)
      } catch (error) {
        console.log("ERROR: ", error)
      } 
    }
    videoLoad()



    ;(async()=>{
      try {
        const accessToken = Cookies.get('accessToken')
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/likes/is-video-liked/${videoId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },  {withCredentials: true });
        setisLiked(response.data.data.isLiked)
      } catch (error) {
        console.log("ERROR: ", error)
      }
    })()


    ;(async()=>{
      try {
        const accessToken = Cookies.get('accessToken')
        const response = await axios.post(`${process.env.REACT_APP_API_URI}/users/push-to-watchHistory/${videoId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },  {withCredentials: true });
        if(response.data){
        }
      } catch (error) {
        console.log("Error while pushing to watchhistory")
      }


    })()

    
    
  }, [])

  useEffect(() => {
   if(obj && obj.owner){
    ;(async()=>{
      try {
        const accessToken = Cookies.get('accessToken')
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/users/get-user-by-id/${obj.owner}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },  {withCredentials: true });
        if(response.data){
          console.log(response.data)
          setvideoOwner(response.data.data.user)
        }
      } catch (error) {
        console.log("error while getting user")
      }
    })()
   }
  }, [obj])
  




  useEffect(() => {
    
    ;(async()=>{
      try {
        const accessToken = Cookies.get('accessToken')
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/comments/get-video-comments/${videoId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },  {withCredentials: true });
        setcomments(response.data.data.comments)
      } catch (error) {
        console.log("ERROR: ", error)
      }

      
    })()

  }, [newComment, commentDelete])
  

  
  


  return (
    <>
    <Navbar/>
    
    <div className="video-page">
      { isEligible ?  (
      <div className="video-update">
        <button id="video-delete" onClick={deleteModal}>Delete</button>
        <button id="video-update" onClick={setUpdateModal}>Update</button>
      </div>
      ) : ""}
      <div className="video-container">
        <ReactPlayer className="video-player" url={obj?.videoFile} controls id='video' />
      </div>
      <div className="video-details">
        <h1 className="video-title">{obj?.title}</h1>
        <p className="video-description">{obj?.description}</p>
        <div className="video-actions">
          <button className="like-button" onClick={handleLikes} >{ isLiked ? "Liked" : "Like"}</button>
        </div>
      </div>
      <Link to={`/user-channel/${videoOwner.username}`} className='Linkto' >
      <div className="channel-details">
        <img src={videoOwner.avatar} alt="" />    
        <div className="sub-channel">
          <span>@{videoOwner.username}</span>
          <span>{videoOwner.fullname}</span>
        </div>
      </div>
      </Link>
      <div className="comment-section">
        <h2 className="comment-title">Comments</h2>
        <form className="comment-form" >
          <textarea
            
            value={content}
            onChange={(e)=> setcontent(e.target.value)}
            className="comment-input"
            placeholder="Add a comment"
          />
          
          <button className="comment-submit" onClick={handleComment} type="submit">Submit</button>
        </form>
        {
          comments.map((comment)=>(
            <Comment content={comment.content} owner={comment.owner} id={comment._id} deleteComment={handleCommentDelete} isLoading={isLoading}  />
          ))
        }

        {
          commentDeleteError && (
            <Error closeModal={closemodal} content='You cannot delete this comment'/>
          )
        }
        {
          isUpdateModalOpen && (
            <VideoUpdate onClose={setUpdateModal} videoId={videoId} />
          )
        }
        { showDeleteModal && (
          <Yesorno title={'Are you sure you want to delete this video'} handleClose={deleteModal} handleVideoDelete={handleVideoDelete} isLoading={isLoading} />
        )}




        
        <div className="comments-list">
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Video