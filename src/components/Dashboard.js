import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const [waterTests, setWaterTests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
  useEffect(() => {
    axios.get('http://localhost:3001/watertest')
      .then(response => {
        setWaterTests(response.data.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);





  if (!userData) {
    return <div>Loading user data...</div>;
  }
  const formatBdayDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  const formatTestDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


  const AllResultViewItem = (item) => {
    return (
      <tr key={item.TestID} className="border-b dark:border-gray-700">
        <th scope="row" className=" px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {item.voornaam}
        </th>
        <td className="px-4 py-3">{item.solid_units}</td>
        <td className="px-4 py-3">{item.Troebelheid}</td>
        <td className="px-4 py-3">{item.Locatie}</td>
        <td className="px-4 py-3">{formatTestDate(item.TestDatumTijd)}</td>

      </tr>
    )
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
              <strong>Geboorte Datum:</strong> {formatBdayDate(userData.geboorteDatum)}
            </div>
            <div className="text-gray-700 text-base mb-2">
              <strong>activation key:</strong> {userData.act_key}
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Edit Profile
          </button>
        </div>
        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Andere Resultaten
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">Voornaam</th>

                    <th scope="col" className="px-4 py-3">solid units</th>
                    <th scope="col" className="px-4 py-3">Troebelheid</th>

                    <th scope="col" className="px-4 py-3">Locatie</th>
                    <th scope="col" className="px-4 py-3">Test Datum</th>
                  </tr>
                </thead>
                <tbody>
                  {waterTests.map(x => AllResultViewItem(x))}
                </tbody>

              </table>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Andere Resultaten
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">Voornaam</th>

                    <th scope="col" className="px-4 py-3">solid units</th>
                    <th scope="col" className="px-4 py-3">Troebelheid</th>

                    <th scope="col" className="px-4 py-3">Locatie</th>
                    <th scope="col" className="px-4 py-3">Test Datum</th>
                  </tr>
                </thead>
                <tbody>
                  {waterTests.map(x => AllResultViewItem(x))}
                </tbody>

              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard