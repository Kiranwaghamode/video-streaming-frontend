import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <>
 <div className="menu-main">
    <div id="you">
    <span id='head-you'>You</span>
    <div className="sub-menu">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" alt="" />
        <span className='sub-menu-span'>Your Channel</span>
    </div>
    <div className="sub-menu">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToN7bD4l-dNiWcyNW1QKGyIWwmkmFME_xKbg&s" alt="" />
        <span className='sub-menu-span'>History</span>
    </div>
    <div className="sub-menu">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NwHv7tcPBDXa9oEfX1nkkwCtGpBGTasTLA&s" alt="" />
        <span className='sub-menu-span'>Playlists</span>
    </div>
    <div className="sub-menu">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/422/468/small/Multimedia__28107_29.jpg" alt="" />
        <span className='sub-menu-span'>Liked Videos</span>
    </div>
    <div className="sub-menu">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95wGMAPVPIfQ0mwQ-2PiQXmztybJ_GovLsT-rpvv7BUfvgugJ0DHpsoslK4tdXmD6yu8&usqp=CAU" alt="" />
        <span className='sub-menu-span'>Watch Later</span>
    </div>
    </div>

    <div id="subscriptions">
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
    </div>

 </div>
    
    </>
  )
}

export default Menu