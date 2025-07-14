import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('passageiro');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (tab) => {
    setIsLogin(tab === 'login');
    setEmail('');
    setPassword('');
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleContinue = () => {
    // Lógica simulada (substituir por chamada API no backend)
    alert(`${isLogin ? 'Login' : 'Cadastro'} como ${userType} - Email: ${email}, Senha: ${password}`);
  };

  return (
    <div className="container">
      <div className="header-left">Autobix</div>
      <div className="content-wrapper">
        <div className="login-box">
          <h1 className="welcome">Bem-vindo(a) ao Autobix</h1>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="password-hint">Use 8 ou mais letras, números e símbolos</p>
          <button
            className="btn continue-btn"
            onClick={handleContinue}
            disabled={password.length < 8 || !email}
          >
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
          {!isLogin && (
            <p className="login-link">
              Se já tem uma conta?{' '}
              <button className="link-btn" onClick={() => handleTabChange('login')}>
                Login
              </button>
            </p>
          )}
          <p className="terms">
            Ao continuar, você concorda com os{' '}
            <a href="https://autobix.com.br/termos" target="_blank" rel="noopener noreferrer">
              Termos de Serviço do Autobix
            </a>{' '}
            e confirma que leu nossa{' '}
            <a href="https://autobix.com.br/politica" target="_blank" rel="noopener noreferrer">
              Política de Privacidade
            </a>
            .
          </p>
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
    </div>
  );
};

export default Login;