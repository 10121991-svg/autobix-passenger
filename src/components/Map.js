import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -23.5505, // São Paulo
    lng: -46.6333,
  };

  const origin = { lat: -23.5505, lng: -46.6333 }; // Origem: São Paulo
  const destination = { lat: -22.9068, lng: -43.1729 }; // Destino: Rio de Janeiro
  const [directions, setDirections] = React.useState(null);

  React.useEffect(() => {
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
  }, [isLoaded]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {directions && <DirectionsRenderer directions={directions} />}
      <Marker position={center} />
    </GoogleMap>
  ) : <div>Carregando mapa...</div>;
};

export default Map;