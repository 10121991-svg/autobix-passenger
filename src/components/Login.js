import React, { useState } from 'react'; // Importação correta de useState
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('passageiro');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setIsLogin(tab === 'login');
    setEmail('');
    setPassword('');
    setWhatsapp('');
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleContinue = () => {
    if (password.length >= 8 && (email || whatsapp)) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userType', userType);
      navigate('/passenger-home');
    } else {
      alert('Preencha e-mail ou WhatsApp e senha com pelo menos 8 caracteres!');
    }
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
          <label htmlFor="email">Email ou WhatsApp</label>
          <input
            type="text"
            id="email"
            placeholder={isLogin ? 'Digite seu e-mail ou WhatsApp' : 'Digite seu e-mail'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isLogin && (
            <div>
              <input
                type="text"
                placeholder="Digite seu WhatsApp (ex.: +5511999999999)"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                style={{ marginTop: '10px' }}
              />
            </div>
          )}
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <p className="password-hint">Use 8 ou mais letras, números e símbolos</p>
          )}
          <button
            className="btn continue-btn"
            onClick={handleContinue}
            disabled={!email && !whatsapp || password.length < 8}
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
            <button
              className="link-btn"
              onClick={() => window.open('https://autobix.com.br/termos', '_blank')}
              style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Termos de Serviço do Autobix
            </button>{' '}
            e confirma que leu nossa{' '}
            <button
              className="link-btn"
              onClick={() => window.open('https://autobix.com.br/politica', '_blank')}
              style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Política de Privacidade
            </button>
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
            Suporte: <button style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer' }} onClick={() => window.open('https://wa.me/5511991075415')}> (11) 99107-5415</button>
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