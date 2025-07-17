import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PassengerHome = () => {
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    alert(`Procurando destino: ${destination}`);
    // Lógica de busca futura com OpenRouteService
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
            placeholder="Digite o destino"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button className="btn continue-btn" onClick={handleSearch}>
            Buscar
          </button>
        </div>
        <div className="map-section">
          <MapContainer center={[-23.5505, -46.6333]} zoom={10} style={{ height: '350px', width: '450px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[-23.5505, -46.6333]} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default PassengerHome;