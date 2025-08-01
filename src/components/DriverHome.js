import React from 'react';
import { useNavigate } from 'react-router-dom';

const DriverHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    navigate('/');
  };

  return (
    <div className="container">
      <div className="header-left">Autobix - Motorista</div>
      <div className="content-wrapper">
        <p>Bem-vindo à tela de Motorista! (Em desenvolvimento)</p>
        <button className="btn" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default DriverHome;