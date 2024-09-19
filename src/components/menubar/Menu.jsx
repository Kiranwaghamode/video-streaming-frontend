import React, { useContext, useState } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

const Menu = () => {

    const { currentUser, showWatchHistory, setshowWatchHistory,authenticated } = useContext(UserContext)

    const [showMenu, setshowMenu] = useState(false)



    

  return (
    <>
    <div className="menu-options hide-option" onClick={()=> setshowMenu(!showMenu)}>
        <div className={`menu-line ${showMenu ? 'first': ''}  `}></div>
        <div className={`menu-line ${showMenu ? 'show-menu': ''} `}></div>
        <div className={`menu-line  ${showMenu ? 'second': ''} `}></div>
    </div>
 <div className={`menu-main ${!showMenu ? 'hide-menu': ''} `}>
    <div id="you">
    <span id='head-you'>You</span>
    <Link to={authenticated ? `/user-channel/${currentUser.username}` : ''} className={`Linkto ${!authenticated ? 'click': ''}`} >
    <div className="sub-menu">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" alt="" />
        <span className='sub-menu-span'>Your Channel</span>
    </div>
    </Link>
    <div className={`sub-menu ${showWatchHistory ? 'selected': ''} ${!authenticated ? 'click' : ''}`} onClick={()=> setshowWatchHistory(!showWatchHistory)}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToN7bD4l-dNiWcyNW1QKGyIWwmkmFME_xKbg&s" alt="" />
        <span className='sub-menu-span'>History</span>
    </div>
    
    
    
    </div>

    {/* <div id="subscriptions">
        <span id='subscription-span'>Subscriptions</span>
        <div className="subscription-div">
            <img src="https://yt3.googleusercontent.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s900-c-k-c0x00ffffff-no-rj" alt="" />
            <span id='subscription-div-span'>Dhruv rathee</span>
        </div>
        <div className="subscription-div">
            <img src="https://yt3.googleusercontent.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s900-c-k-c0x00ffffff-no-rj" alt="" />
            <span id='subscription-div-span'>Sandeep Maheshwari</span>
        </div>
        <div className="subscription-div">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC41flzoZC1EQy1ms3tEysWhuIJ_2EfXw3A&s" alt="" />
            <span id='subscription-div-span'>Mr Beast</span>
        </div>
    </div> */}

 </div>
    
    </>
  )
}

export default Menu