import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import PassengerHome from './components/PassengerHome';
import DriverHome from './components/DriverHome';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/passenger-home" element={<PassengerHome />} />
        <Route path="/driver-home" element={<DriverHome />} />
      </Routes>
    </Router>
  );
}

export default App;