import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Agar koi seedha localhost:5173 par aaye toh wo /auth par chala jaye */}
        <Route path="/" element={<Navigate to="/auth" />} />
        
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Agar koi galat URL daale toh wapas auth par bhej do */}
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </Router>
  );
}

export default App;