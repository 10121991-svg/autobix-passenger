import React, { useState } from 'react';

function PassengerHome() {
  const [message, setMessage] = useState('');

  const handleRequestRide = async () => {
    try {
      const response = await fetch('https://urbiix-backend.onrender.com/api/passageiro/viagem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'exemplo' })
      });
      const data = await response.json();
      setMessage(data.message || 'Corrida solicitada!');
    } catch (error) {
      setMessage('Erro ao solicitar corrida.');
    }
  };

  return (
    <section className="container mx-auto text-center py-20 text-white">
      <h2 className="text-4xl font-bold mb-4">Segurança, Respeito e Confiança</h2>
      <p className="text-xl mb-6">Autobix: seu carro na palma da mão, sem complicação! Vem pra revolução!</p>
      <div className="flex justify-center space-x-4">
        <button onClick={handleRequestRide} className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Quero pedir um Autobix!</button>
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Quero ser um Motorista</button>
        <button className="bg-purple-500 text-white px-6 py-3 rounded hover:bg-purple-600">Quero ser um Franqueado</button>
      </div>
      {message && <p className="mt-4">{message}</p>}
    </section>
  );
}

export default PassengerHome;