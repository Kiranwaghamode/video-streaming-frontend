import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="nav-main">
    <div className="nav-left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSPaFQq-Eyoa878pca55a046myfGy9iD2uQ&s" alt="" />
        <h4>STREAM IT</h4>
    </div>
    <div className="nav-center">
        <input type="text" placeholder='Search'/>
        <button>Search</button>
    </div>
    <div className="nav-right">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtgftLHQuwp0CIxSvwqcRFgq3kjfuTA_APg&s" alt="" id='video-icon' />

        <img src="https://m.media-amazon.com/images/M/MV5BMzgwYWNlMDItZDdjOS00NmI3LWJlNGUtNjRkYzYyYjU4OWE5XkEyXkFqcGdeQWRvb2xpbmhk._V1_QL75_UY281_CR0,0,500,281_.jpg" alt="" id='profile-img' />

    </div>
    </div>
    
    </>
  )
}

export default Navbar