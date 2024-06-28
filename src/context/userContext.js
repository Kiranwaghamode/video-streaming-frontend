// src/context/UserContext.js
import React, { createContext, useState } from 'react';

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

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setloggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
