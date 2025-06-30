import React from 'react';

function DriverHome() {
  return (
    <section className="container mx-auto text-center py-20 text-white">
      <h2 className="text-4xl font-bold mb-4">Bem-vindo, Motorista!</h2>
      <p className="text-xl mb-6">Gerencie suas corridas e ganhos aqui.</p>
      <div className="flex justify-center space-x-4">
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Ver Corridas Disponíveis</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Ver Meus Ganhos</button>
      </div>
    </section>
  );
}

export default DriverHome;