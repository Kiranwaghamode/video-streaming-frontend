import React, { useContext, useState } from 'react'
import './Register.css'
import { UserContext } from '../../context/userContext'
import axios from 'axios'

const Register = ({toggleSignUp}) => {

  const { setloggedIn, currentUser, setCurrentUser } = useContext(UserContext)

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [avatar, setavatar] = useState(null)
  const [coverImage, setcoverImage] = useState(null)
  const [password , setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isLoading, setisLoading] = useState(false)




  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('fullname', name);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('avatar', avatar);
    formData.append('password', password);
    formData.append('coverImage', coverImage);


    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }



    try {
      setisLoading(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URI}/users/register`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log('Success:', response.data);

        setloggedIn(true)
        toggleSignUp()
        setisLoading(false)
    } catch (error) {
        console.error('Error:', error);
        setisLoading(false)
        // Handle error (e.g., display an error message)
    }
};



  return (
    <>
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleSignUp} >&times;</span>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              className='register-input'
              id="name"
              name="name"
              required
              onChange={(e)=> setname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">User Name:</label>
            <input
              type="text"
              className='register-input'
              id="user-name"
              name="name"
              required
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className='register-input'
              name="email"
              required
              onChange={(e)=> setemail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className='register-input'
              name="password"
              required
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar:</label>
            <input
              type="file"
              id="avatar"
              className='register-input'
              name="avatar"
              required
              accept="image/*"
              onChange={(e)=> {
                setavatar(e.target.files[0])
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="coverImage">Cover Image:</label>
            <input
              type="file"
              className='register-input'
              id="coverImage"
              name="coverImage"
              accept="image/*"
              required
              onChange={(e)=> setcoverImage(e.target.files[0])}
            />
          </div>
          <button type="submit" disabled={false} id='register-button'>{ isLoading ? <><i class="fa fa-spin fa-solid fa-rotate-right"></i>      
          Loading</> :'Register'}</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register