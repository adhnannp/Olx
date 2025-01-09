import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PublicRoute = ({ children }) => {
  const { loginState } = useContext(AuthContext);

  return loginState ? <Navigate to="/" /> : children;
};

export default PublicRoute;
