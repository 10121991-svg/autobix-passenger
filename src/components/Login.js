import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('passageiro');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (password.length >= 8 && email) {
      navigate('/passenger-home');
    } else {
      alert('Preencha e-mail e senha com pelo menos 8 caracteres!');
    }
  };

  return (
    <div className="container">
      <div className="header-left">Autobix</div>
      <div className="content-wrapper">
        <div className="login-box">
          <h1 className="welcome">Bem-vindo(a) ao Autobix</h1>
          <div className="tabs">
            <button className={`tab ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
            <button className={`tab ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Cadastro</button>
          </div>
          <div className="user-type">
            <button className={`type-btn ${userType === 'passageiro' ? 'active' : ''}`} onClick={() => setUserType('passageiro')}>Passageiro</button>
            <button className={`type-btn ${userType === 'motorista' ? 'active' : ''}`} onClick={() => setUserType('motorista')}>Motorista</button>
          </div>
          <label htmlFor="email">Email ou WhatsApp</label>
          <input type="text" id="email" placeholder="Digite seu e-mail ou WhatsApp" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="btn continue-btn" onClick={handleContinue} disabled={!email || password.length < 8}>Entrar</button>
          <p className="terms">
            Ao continuar, você concorda com os <a href="https://autobix.com.br/termos" target="_blank" rel="noopener noreferrer">Termos de Serviço do Autobix</a> e confirma que leu nossa <a href="https://autobix.com.br/politica" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>.
          </p>
          <div className="qr-section">
            <p>Leia o QR Code no navegador do celular</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://autobix.com.br&size=120x120" alt="QR Code" />
          </div>
          <div className="support">
            Suporte: <a href="https://wa.me/5511991075415" target="_blank" rel="noopener noreferrer">(11) 99107-5415</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;