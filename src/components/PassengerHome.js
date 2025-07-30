import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';

const PassengerHome = () => {
  const [destination, setDestination] = useState('');
  const [route, setRoute] = useState(null);
  const apiKey = process.env.REACT_APP_OPENROUTE_API_KEY;
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!apiKey) {
      alert('Chave da API não configurada! Contate o administrador.');
      return;
    }
    if (!destination) {
      alert('Digite um destino!');
      return;
    }
    const start = '-23.5505,-46.6333';
    const end = encodeURIComponent(destination);
    try {
      const response = await fetch(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`
      );
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const coordinates = data.features[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
        setRoute(coordinates);
      } else {
        alert('Rota não encontrada!');
      }
    } catch (error) {
      console.error('Erro na API:', error);
      alert('Erro ao buscar rota: ' + error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    navigate('/');
  };

  return (
    <div className="container">
      <div className="header-left">Autobix - Passageiro</div>
      <div className="content-wrapper">
        <div className="search-box">
          <label htmlFor="destination">Destino</label>
          <input
            type="text"
            id="destination"
            placeholder="Digite o destino (ex.: -22.9068,-43.1729)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button className="btn continue-btn" onClick={handleSearch}>
            Buscar
          </button>
          <button className="btn continue-btn" onClick={handleLogout} style={{ marginTop: '10px' }}>
            Sair
          </button>
        </div>
        <div className="map-section">
          <MapContainer center={[-23.5505, -46.6333]} zoom={10} style={{ height: '350px', width: '450px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[-23.5505, -46.6333]} />
            {route && <Polyline positions={route} color="blue" />}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default PassengerHome;