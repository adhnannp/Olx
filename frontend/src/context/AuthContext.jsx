import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginState, setloginState] = useState(false);
  function login(){
    return setloginState(true)
  }
  function logout(){
    return setloginState(false)
  }
  return (
    <AuthContext.Provider value={{loginState,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};
