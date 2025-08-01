import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario && senha) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userType', 'passenger');
      navigate('/passenger-home');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="logo">
          Autobix <span></span>
        </div>
        <form onSubmit={handleLogin}>
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            id="usuario"
            placeholder="Digite seu usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit" className="btn">
            Entrar
          </button>
        </form>
        <div className="qr-section">
          <p>Leia o QR Code no navegador do celular</p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=https://autobix.com.br&size=120x120"
            alt="QR Code"
          />
        </div>
        <div className="support">
          Suporte: <a href="https://wa.me/5511991075415">(11) 99107-5415</a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/20/ffffff/facebook--v1.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/20/ffffff/instagram-new.png" alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/20/ffffff/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;