import React, { useContext, useState } from 'react'
import './Register.css'
import { UserContext } from '../../context/userContext'
import axios from 'axios'

const Register = ({toggleModal}) => {

  const { setloggedIn } = useContext(UserContext)

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [avatar, setavatar] = useState(null)
  const [coverImage, setcoverImage] = useState(null)
  const [password , setPassword] = useState('')
  const [username, setUsername] = useState('')





  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('fullname', name);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('avatar', avatar);
    formData.append('password', password);
    formData.append('coverImage', coverImage);

    try {
        const response = await axios.post('http://localhost:8000/api/v1/users/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log('Success:', response.data);
        // Handle success (e.g., display a message to the user)
    } catch (error) {
        console.error('Error:', error);
        // Handle error (e.g., display an error message)
    }
};



  return (
    <>
    <div className="modal">
      <div className="modal-content">
        <span className="close" >&times;</span>
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
          <button type="submit" id='register-button'>Register</button>
        </form>
        <button  className="login-button" onClick={toggleModal}>Already have an account? Log in</button>
      </div>
    </div>
    </>
  )
}

export default Register