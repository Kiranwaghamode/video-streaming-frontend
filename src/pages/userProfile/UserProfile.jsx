import React, { useContext, useState } from 'react'
import './UserProfile.css'
import { UserContext } from '../../context/userContext'
import CoverImage from '../../components/coverimage/CoverImage'
import Navbar from '../../components/navbar/Navbar'
import Avatar from '../../components/avatar/Avatar'
import Email from '../../components/email/Email'


const UserProfile = () => {

  const { currentUser, authenticated } = useContext(UserContext)
  const [showCoverImage, setShowCoverImage] = useState(false)


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmailModalOpen, setisEmailModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const openEmailModal = () => {
      setisEmailModalOpen(true);
    };
  
    const closeEmailModal = () => {
      setisEmailModalOpen(false);
    };



  return ( authenticated ?
    <>
    <Navbar/>
    <div className="user-profile">
      <div className="user-profile-cover">
        <img className="user-profile-cover-image" src={currentUser.coverImage} alt="Cover" />
        <button className="user-profile-edit-cover" onClick={()=> setShowCoverImage(true)} >Edit</button>
      </div>
      <div className="user-profile-details">
        <div className="user-profile-avatar">
          <img className="user-profile-avatar-image" src={currentUser.avatar} alt="Avatar" />
          <button className="user-profile-edit-avatar" onClick={openModal} >Edit</button>
        </div>
        <div className="user-profile-info">
          <div className="user-profile-info-item">
            <h1 className="user-profile-username">{currentUser.username}</h1>
          </div>
          <div className="user-profile-info-item">
            <p className="user-profile-fullname">{currentUser.fullname}</p>
          </div>
          <div className="user-profile-info-item">
            <p className="user-profile-email">{currentUser.email}</p>
            <button className="user-profile-edit-button" onClick={openEmailModal} >Edit</button>
          </div>
        </div>
      </div>
    </div>
    {
      showCoverImage ? <CoverImage setShowCoverImage={setShowCoverImage} /> : ""
    }
    {
      isModalOpen ? <Avatar closeModal={closeModal}/> : ""
    }
    {
      isEmailModalOpen ? <Email onRequestClose={closeEmailModal} /> : ""
    }
    


    </> 
    :<>
    <Navbar/>
    <h1 id='login-warning'>PLEASE LOGIN BEFORE VISITING THIS PAGE</h1>
    </> 
  )
}

export default UserProfile