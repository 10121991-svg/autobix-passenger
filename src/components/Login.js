import React, { useState, useCallback } from 'react';
import './Login.css';
import { GoogleMap, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('passageiro');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [directions, setDirections] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const containerStyle = {
    width: '450px',
    height: '350px',
  };

  const center = {
    lat: -23.5505, // Exemplo: São Paulo
    lng: -46.6333,
  };

  const origin = { lat: -23.5505, lng: -46.6333 }; // Origem: São Paulo
  const destination = { lat: -22.9068, lng: -43.1729 }; // Destino: Rio de Janeiro

  const calculateRoute = useCallback(() => {
    if (isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error('Erro ao calcular rota:', status);
          }
        }
      );
    }
  }, [isLoaded, origin, destination]);

  React.useEffect(() => {
    calculateRoute();
  }, [calculateRoute]);

  const handleTabChange = (tab) => {
    setIsLogin(tab === 'login');
    setEmail('');
    setPassword('');
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleContinue = () => {
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
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="https://autobix.com.br/termos" target="_blank" rel="noopener noreferrer">
              Termos de Serviço do Autobix
            </a>{' '}
            e confirma que leu nossa{' '}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
        {isLoaded && (
          <div className="map-section">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;