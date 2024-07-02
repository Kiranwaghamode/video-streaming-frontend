import React from 'react'
import './UserProfile.css'

const UserProfile = () => {
  return (
    <>
    <div className="user-profile">
      <div className="user-profile-cover">
        <img className="user-profile-cover-image" src="https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542831371-29b0f74f9713%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dcoding%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fHx8MTcxOTQ4MjQxNXww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60" alt="Cover" />
        <button className="user-profile-edit-cover" >Edit</button>
      </div>
      <div className="user-profile-details">
        <div className="user-profile-avatar">
          <img className="user-profile-avatar-image" src="https://yt3.googleusercontent.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s900-c-k-c0x00ffffff-no-rj" alt="Avatar" />
          <button className="user-profile-edit-avatar" >Edit</button>
        </div>
        <div className="user-profile-info">
          <div className="user-profile-info-item">
            <h1 className="user-profile-username">dhruvrathee</h1>
            <button className="user-profile-edit-button">Edit</button>
          </div>
          <div className="user-profile-info-item">
            <p className="user-profile-fullname">Dhruv Rathee</p>
          </div>
          <div className="user-profile-info-item">
            <p className="user-profile-email">dhruvrathee@gmail.com</p>
            <button className="user-profile-edit-button" >Edit</button>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default UserProfile