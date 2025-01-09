import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { loginState } = useContext(AuthContext);

  return loginState ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
