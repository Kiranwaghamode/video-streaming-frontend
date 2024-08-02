// src/context/UserContext.js
import React, { createContext, useEffect, useState } from 'react';
import { isLoggedIn } from '../utils/auth.js';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    avatar: null,
    coverImage: null,
  });

  const [loggedIn, setloggedIn] = useState(false)

  const [authenticated, setAuthenticated] = useState(false);

  const [currentUser, setCurrentUser] = useState({})

 
  const userLogin = (user) =>{
    setCurrentUser(user)
  }

 
  useEffect(() => {
    
     
  }, []);

  useEffect(() => {
    if (isLoggedIn()) {
      setAuthenticated(true);     
    }
    
    const retrievedObject = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(retrievedObject)
    setCurrentUser(retrievedObject)
  }, [loggedIn])
  


  
  

  return (
    <UserContext.Provider value={{
       user, 
       setUser, 
       loggedIn, 
       setloggedIn, 
       currentUser, 
       setCurrentUser, 
       authenticated , 
       setAuthenticated,
       userLogin
       }}>
      {children}
    </UserContext.Provider>
  );
};
