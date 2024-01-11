import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";
import LoginScreen from "./components/LoginScreen";
import Register from "./components/Register";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            sessionStorage.getItem('userId') ? (
              <Dashboard />

            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/edit-profile"
          element={
            sessionStorage.getItem('userId') ? (
              <EditProfile />
              
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;