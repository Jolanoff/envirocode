import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import LoginScreen from "./components/LoginScreen";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />

        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;