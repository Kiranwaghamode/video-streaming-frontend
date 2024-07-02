import React, { useContext, useState } from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menubar/Menu'
import Content from '../../components/content/Content'
import Register from '../../components/register/Register'
import { UserContext } from '../../context/userContext'
import Login from '../../components/login/Login'
import Password from '../../components/changepassword/Password'
import Playlist from '../../components/playlist/Playlist'


const Home = () => {
  
  const { loggedIn, setloggedIn } = useContext(UserContext)

  // const loggedIn = false;

  const [showRegister, setShowRegister] = useState(true)
  const [close, setClose] = useState(false)

  const toggleModal = () =>{
    setShowRegister(!showRegister)
  }

  



  return (
    <>
    <Navbar/>
    <div className="home-main">
    <Menu/>
    <Content/>
    {/* <Playlist/> */}

    {
      showRegister ? ( <Register toggleModal={toggleModal}/>): <Login toggleModal={toggleModal}/>
    }


    {/* { !loggedIn && <Register/> } */}
    {/* <Login/> */}
    {/* <Password/> */}

    </div>
    </>
  )
}

export default Home