import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const userId = sessionStorage.getItem('userId');
    return userId ? <Outlet /> : <Navigate to="/login" />;
  
}

export default ProtectedRoute