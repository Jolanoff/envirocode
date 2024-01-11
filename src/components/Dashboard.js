import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const handleLogout = () => {
    sessionStorage.removeItem('userId');
    navigate('/login');
  };
  useEffect(() => {
    const userId = sessionStorage.getItem('userId');

    if (userId) {
      axios.get(`http://localhost:3001/user/${userId}`)
        .then(response => {
          if (response.data.success) {
            setUserData(response.data.user);
          
          } else {
            console.error('Failed to fetch user data:', response.data.message);
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  if (!userData) {
    return <div>Loading user data...</div>;
  }
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl font-semibold text-gray-900 py-6">Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>

        <div className="max-w rounded overflow-hidden shadow-lg bg-white my-8 mx-auto p-6">
          <h2 className="text-2xl mb-4 font-bold text-center text-gray-800">User Profile</h2>
          <div className="mb-4">
            <div className="text-gray-700 text-base mb-2">
              <strong>Naam:</strong> {userData.voornaam} {userData.achternaam}
            </div>
            <div className="text-gray-700 text-base mb-2">
              <strong>Email:</strong> {userData.email}
            </div>
            <div className="text-gray-700 text-base mb-2">
              <strong>Telefoon Nummer:</strong> {userData.TelefoonNummer}
            </div>
            <div className="text-gray-700 text-base mb-2">
              <strong>Regio:</strong> {userData.regio}
            </div>
            <div className="text-gray-700 text-base mb-2">
              <strong>Geboorte Datum:</strong> {formatDate(userData.geboorteDatum)}
            </div>
            <div className="text-gray-700 text-base mb-2">
              <strong>activation key:</strong> {userData.act_key}
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Edit Profile
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Mijn Resultaten
            </h3>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Resultaten Vernieuwen
            </button>
          </div>
          <div className="border-t border-gray-200">
            {/* Resultaten lijst */}
            <ul className="divide-y divide-gray-200">
              {/* Resultaat item */}
              <li className="px-4 py-4 sm:px-6">
                <h3 className="text-md leading-5 font-medium text-gray-900">
                  Testresultaat #1
                </h3>
                <p className="mt-1 text-md text-gray-500">
                  Details van de resultaat...
                </p>
              </li>
              {/* Herhaal voor elke resultaat */}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Andere Resultaten
              </h3>
            </div>
            <div className="border-t border-gray-200">
              {/* Resultaten lijst */}
              <ul className="divide-y divide-gray-200">
                {/* Resultaat item */}
                <li className="px-4 py-4 sm:px-6">
                  <h3 className="text-md leading-5 font-medium text-gray-900">
                    Testresultaat van Gebruiker #1
                  </h3>
                  <p className="mt-1 text-md text-gray-500">
                    Details van de resultaat...
                  </p>
                </li>
                {/* Herhaal voor elke resultaat */}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard