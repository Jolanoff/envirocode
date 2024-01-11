import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditProfile = () => {
    const [profileData, setProfileData] = useState({
        voornaam: '',
        achternaam: '',
        email: '',
        TelefoonNummer: '',
        regio: '',
        geboorteDatum: '',
        act_key: '',
    
    });

    useEffect(() => {
       
        const userId = sessionStorage.getItem('userId');
        if (userId) {
            axios.get(`http://localhost:3001/user/${userId}`)
                .then(response => {
                    if (response.data.success) {
                        setProfileData(response.data.user);
                    }
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    const handleChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = sessionStorage.getItem('userId');
    
        axios.put(`http://localhost:3001/edit-profile/${userId}`, profileData)
          .then(response => {
            if (response.data.success) {
              alert('Profile updated successfully');
             
            } else {
              alert('Failed to update profile');
            }
          })
          .catch(error => {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
          });
      };

    return (
        <div className="max-w rounded overflow-hidden shadow-lg bg-white my-8 mx-auto p-6">
            <h2 className="text-2xl mb-4 font-bold text-center text-gray-800">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-4">
                    <label htmlFor="voornaam" className="block mb-2 text-sm font-medium text-gray-900">Voornaam</label>
                    <input
                        type="text"
                        id="voornaam"
                        name="voornaam"
                        value={profileData.voornaam}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="voornaam" className="block mb-2 text-sm font-medium text-gray-900">Achternaam</label>
                    <input
                        type="text"
                        id="achternaam"
                        name="achternaam"
                        value={profileData.achternaam}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="voornaam" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="voornaam" className="block mb-2 text-sm font-medium text-gray-900">Telefoon Nummer</label>
                    <input
                        type="text"
                        id="TelefoonNummer"
                        name="TelefoonNummer"
                        value={profileData.TelefoonNummer}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="voornaam" className="block mb-2 text-sm font-medium text-gray-900">Regio</label>
                    <input
                        type="text"
                        id="regio"
                        name="regio"
                        value={profileData.regio}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="voornaam" className="block mb-2 text-sm font-medium text-gray-900">Geboorte Datum</label>
                    <input
                        type="date"
                        id="geboorteDatum"
                        name="geboorteDatum"
                        value={profileData.geboorteDatum}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="voornaam" className="block mb-2 text-sm font-medium text-gray-900">Key</label>
                    <input
                        type="text"
                        id="act_key"
                        name="act_key"
                        value={profileData.act_key}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Save Changes
                </button>
                <Link to="/" type="submit" className=" mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to dashboard
                </Link>
            </form>
        </div>
    );
};

export default EditProfile;
