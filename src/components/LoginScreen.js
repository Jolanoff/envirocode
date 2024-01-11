import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function LoginScreen() {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      navigate('/'); 
    }
  }, [navigate]);
  const handleSubmit = async (event) => {
 
    
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      });

      const data = response.data;
      

      if (data.success) {
        sessionStorage.setItem('userId', response.data.user.ID);
        navigate('/');
      } else {
        
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
              <Link to="/register"  className="text-sm text-blue-600 hover:underline">Register?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
