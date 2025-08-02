import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [mode, setMode] = useState('login'); // 'login' ou 'cadastro'
  const [userType, setUserType] = useState('passenger'); // 'passenger' ou 'driver'
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario && senha) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userType', userType);
      navigate(userType === 'passenger' ? '/passenger-home' : '/driver-home');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    if (usuario && senha && email) {
      // Simulação de cadastro (armazenar no localStorage)
      localStorage.setItem('user_' + usuario, JSON.stringify({ usuario, senha, email, userType }));
      alert('Cadastro realizado com sucesso! Faça login.');
      setMode('login');
      setUsuario('');
      setSenha('');
      setEmail('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <span className="auto">Auto</span><span className="bix">bix</span>
      </div>
      <div className="login-box">
        <div className="tabs">
          <button
            className={`tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={`tab ${mode === 'cadastro' ? 'active' : ''}`}
            onClick={() => setMode('cadastro')}
          >
            Cadastro
          </button>
        </div>
        <div className="user-type">
          <label>
            <input
              type="radio"
              name="userType"
              value="passenger"
              checked={userType === 'passenger'}
              onChange={() => setUserType('passenger')}
            />
            Passageiro
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="driver"
              checked={userType === 'driver'}
              onChange={() => setUserType('driver')}
            />
            Motorista
          </label>
        </div>
        {mode === 'login' ? (
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
        ) : (
          <form onSubmit={handleCadastro}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              Cadastrar
            </button>
          </form>
        )}
        <div className="support">
          Suporte: <a href="https://wa.me/5511991075415">(11) 99107-5415</a>
        </div>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/20/ffffff/instagram-new.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;