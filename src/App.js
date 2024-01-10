import Dashboard from "./components/Dashboard";
import LoginScreen from "./components/LoginScreen";
import Register from "./components/Register";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;