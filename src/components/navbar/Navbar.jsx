import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../context/userContext'
import Login from '../login/Login'
import Register from '../register/Register'
import Logout from '../logout/Logout'
import axios from 'axios'
const Navbar = () => {


  const { 
    currentUser, 
    setCurrentUser, 
    authenticated, 
    setAuthenticated,
    setloggedIn,
    loggedIn
  } = useContext(UserContext)

  const navigate = useNavigate()
  const [showRegister, setShowRegister] = useState(false)
  const [isClosed, setisClosed] = useState(false)
  const [signIn, setsignIn] = useState(false)
  const [signUp, setsignUp] = useState(false)


  const [isModalOpen, setIsModalOpen] = useState(false);

  const showErrorModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };




  const toggleClosed = () =>{
    setisClosed(!isClosed)
  }

  const toggleSignIn = () =>{
    setsignIn(!signIn)
  }

  const toggleSignUp = () =>{
    setsignUp(!signUp)
  }

  const toggleModal = () =>{
    setShowRegister(!showRegister)
  }

  const [showModal, setShowModal] = useState(false);

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = async() => {
    setShowModal(false);
    const response = await axios.post(`${process.env.REACT_APP_API_URI}/users/logout`,{}, { withCredentials: true })
    // console.log(currentUser)
    
    if(response){
      setCurrentUser({})
      setAuthenticated(false)
      setloggedIn(false)
    }

    
  };

  return (
    <>
    <div className="nav-main">
    <Link to='/' className='home-link'>
    <div className="nav-left">
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSPaFQq-Eyoa878pca55a046myfGy9iD2uQ&s" alt="" />
        <h4>STREAM IT</h4>
        
    </div>
    </Link>
    <div className="nav-center">
        <input type="text" placeholder='Search'/>
        <button>Search</button>
    </div>
    <div className="nav-right">
        {authenticated ? <i class="fa-solid fa-power-off" id='logout' onClick={handleLogoutClick}></i> : ''}
        
        { !authenticated ? <i class="fa-solid fa-user-plus" id='register-logo' onClick={toggleSignUp}></i>: ''}
        { !authenticated ? <i class="fa-solid fa-right-to-bracket" id='login-logo' onClick={toggleSignIn}></i> : '' }

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtgftLHQuwp0CIxSvwqcRFgq3kjfuTA_APg&s" alt="" id='video-icon' />

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
    
    
    </>
  )
}

export default Navbar