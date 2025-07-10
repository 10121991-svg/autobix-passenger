import React from 'react';
import './Login.css'; // Criaremos o CSS separadamente

const Login = () => {
  return (
    <div className="container">
      <div className="login-box">
        <div className="logo">Autobix</div>
        <label htmlFor="usuario">Usuário</label>
        <input type="text" id="usuario" placeholder="Digite seu usuário" />
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" placeholder="Digite sua senha" />
        <button className="btn">Entrar</button>
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
            <img src="https://img.icons8.com/ios-filled/20/ffffff/facebook--v1.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="https://img.icons8.com/ios-filled/20/ffffff/instagram-new.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="https://img.icons8.com/ios-filled/20/ffffff/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;