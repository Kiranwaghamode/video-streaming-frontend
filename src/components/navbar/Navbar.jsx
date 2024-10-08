import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../context/userContext'
import Login from '../login/Login'
import Register from '../register/Register'
import Logout from '../logout/Logout'
import Cookies from 'js-cookie'
import axios from 'axios'
import VideoUpload from '../Videoupload/VideoUpload'
const Navbar = () => {


  const { 
    currentUser, 
    authenticated, 
    setAuthenticated,
    setloggedIn,
    setshowWatchHistory
  } = useContext(UserContext)

  const navigate = useNavigate()
  const [signIn, setsignIn] = useState(false)
  const [signUp, setsignUp] = useState(false)
  const [isuploadModalOpen, setisuploadModalOpen] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false);


  const showUploadModal = () =>{
    setisuploadModalOpen(true)
  }

  const closeUploadModal = () =>{
    setisuploadModalOpen(false)
  }


  const showErrorModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };





  const toggleSignIn = () =>{
    setsignIn(!signIn)
  }

  const toggleSignUp = () =>{
    setsignUp(!signUp)
  }

 

  const [showModal, setShowModal] = useState(false);

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  const handleLogout = async() => {
    try {
      
      const accessToken = Cookies.get('accessToken')
      const response = await axios.post(`${process.env.REACT_APP_API_URI}/users/logout`,{}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },  {withCredentials: true })
      
      if(response.data){
        console.log(response.data)
        setShowModal(false);
        localStorage.removeItem("currentUser")
        Cookies.remove('accessToken');  
        Cookies.remove('refreshToken');
        setAuthenticated(false)
        setloggedIn(false)
      }
    } catch (error) {
      console.log("Error while logout")
      setShowModal(false);
    }

    
  };

  return (
    <>
    <div className="nav-main">
    <Link to='/' className='home-link'>
    <div className="nav-left" onClick={()=> setshowWatchHistory(false)}>
        <img src="/assets/main-logo.png" alt="" />
        <h4>STREAM IT</h4>
        
    </div>
    </Link>
    {/* <div className="nav-center">
        <input type="text" placeholder='Search'/>
        <button>Search</button>
    </div> */}
    <div className="nav-right">
        
        {authenticated ? <img src="/assets/logout.png" id='logout'  onClick={handleLogoutClick} alt="" />: ''}
        
        
        { !authenticated ? <img src="/assets/register.png" id="register-logo" alt="" onClick={toggleSignUp} />: ''}

        
        { !authenticated ? <img src="/assets/enter.png" onClick={toggleSignIn} id='login-logo' alt="" /> : '' }

        {
          authenticated ? <img src="/assets/upload.png" alt="" id='video-icon' onClick={showUploadModal} /> : ""
        }
        

        <img src={ authenticated ? currentUser.avatar : '/assets/user.png'} alt="" id='profile-img' onClick={()=> {navigate('/user-profile')}}/>

    </div>
    </div>
    {/* {
     !isClosed  ? showRegister  ? ( <Register toggleModal={toggleModal} toggleClosed={toggleClosed} />) : <Login toggleModal={toggleModal} toggleClosed={toggleClosed}/> : ""
    } */}

<Logout show={showModal} handleClose={handleCloseModal} handleLogout={handleLogout} />


    {
      signIn ? <Login toggleSignIn={toggleSignIn} showErrorModal={showErrorModal}/> : ""
    }
    {
      signUp ?  <Register toggleSignUp={toggleSignUp} /> : ""
    }

    {isModalOpen && (
        <div id="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <p>Invalid credentials</p>
            <button className="close-button" onClick={closeModal}>Okay</button>
          </div>
        </div>
    )}

    {
      isuploadModalOpen && <VideoUpload closeModal={closeUploadModal}/>
    }
    
    
    </>
  )
}

export default Navbar