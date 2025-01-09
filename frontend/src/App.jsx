import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import AddAdvertisement from './pages/AddAdvertisement/AddAdvertisement'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Logged In');
      navigate('/');
    } else {
      console.log('Logged Out');
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/add-advertisement' element={<AddAdvertisement />} />
      </Routes>
    </div>
  );
};

export default App;
