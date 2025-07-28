import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import PassengerHome from './components/PassengerHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/passenger-home" element={<PassengerHome />} />
      </Routes>
    </Router>
  );
}

export default App;