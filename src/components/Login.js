import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('passageiro');

  const handleTabChange = (tab) => {
    setIsLogin(tab === 'login');
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <div className="container">
      <div className="header-left">Autobix</div>
      <div className="login-box">
        <div className="tabs">
          <button
            className={`tab ${isLogin ? 'active' : ''}`}
            onClick={() => handleTabChange('login')}
          >
            Login
          </button>
          <button
            className={`tab ${!isLogin ? 'active' : ''}`}
            onClick={() => handleTabChange('cadastro')}
          >
            Cadastro
          </button>
        </div>
        <div className="user-type">
          <button
            className={`type-btn ${userType === 'passageiro' ? 'active' : ''}`}
            onClick={() => handleUserTypeChange('passageiro')}
          >
            Passageiro
          </button>
          <button
            className={`type-btn ${userType === 'motorista' ? 'active' : ''}`}
            onClick={() => handleUserTypeChange('motorista')}
          >
            Motorista
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="logo">Autobix</div>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id="usuario" placeholder="Digite seu usuário" />
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha" />
            <button className="btn">Entrar</button>
          </>
        ) : (
          <>
            <div className="logo">Autobix</div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" />
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha" />
            <button className="btn gmail-btn">Cadastrar com Gmail</button>
            <button className="btn">Cadastrar</button>
          </>
        )}
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
          <a href="#">
            <img src="https://img.icons8.com/ios-filled/20/ffffff/instagram-new.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;