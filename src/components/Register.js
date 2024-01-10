import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      navigate('/'); 
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/register', {
            voornaam,achternaam,email,password,key
        });
  
        const data = response.data;
        if (data.success) {
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
        <h3 className="text-2xl font-bold text-center">Maak een nieuw account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="voornaam">Voornaam:</label>
              <input
                type="text"
                placeholder="Voornaam"
                id="Voornaam"
                onChange={(e) => setVoornaam(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="mt-4">
              <label className="block" htmlFor="Achternaam">Achternaam:</label>
              <input
                type="text"
                placeholder="Achternaam"
                id="Achternaam"
                onChange={(e) => setAchternaam(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="mt-4">
              <label className="block">Email:</label>
              <input
                type="email"
                placeholder="Email"
                id="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Wachtwoord:</label>
              <input
                type="password"
                placeholder="Wachtwoord"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Activation key:</label>
              <input
                type="text"
                placeholder="Activation key"
                id="Activationkey"
                onChange={(e) => setKey(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Register</button>
              <a href="#" className="text-sm text-blue-600 hover:underline">back to login?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
