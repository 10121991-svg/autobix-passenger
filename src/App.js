import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PassengerHome from './components/PassengerHome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/passenger-home" element={<PassengerHome />} />
    </Routes>
  );
}

export default App;