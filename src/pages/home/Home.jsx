import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menubar/Menu'
import Content from '../../components/content/Content'


const Home = () => {
  

  // const loggedIn = false;

 

  return (
    <>
    <Navbar/>
    <div className="home-main">
    <Menu/>
    <Content/>
    {/* <Playlist/> */}

    {/* {
    } */}
    </div>
    </>
  )
}

export default Home