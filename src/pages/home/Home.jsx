import React, { useContext } from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menubar/Menu'
import Content from '../../components/content/Content'
import Register from '../../components/register/Register'
import { UserContext } from '../../context/userContext'
import Login from '../../components/login/Login'
import Password from '../../components/changepassword/Password'


const Home = () => {
  
  const { loggedIn, setloggedIn } = useContext(UserContext)

  



  return (
    <>
    <Navbar/>
    <div className="home-main">
    <Menu/>
    <Content/>
    {/* { !loggedIn && <Register/> } */}
    {/* <Login/> */}
    {/* <Password/> */}

    </div>
    </>
  )
}

export default Home