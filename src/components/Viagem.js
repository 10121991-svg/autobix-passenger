import React, { useState } from 'react';

function Viagem() {
    const [userId, setUserId] = useState('');
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://urbiix-backend.onrender.com/api/passageiro/viagem', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: userId, start_location: startLocation, end_location: endLocation })
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setError('');
                console.log('Ride ID:', data.ride_id);
            } else {
                setError(data.error);
                setMessage('');
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor');
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Solicitar Viagem</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ID do Usuário"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Local de Início (ex.: Rua A, 123)"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Destino (ex.: Rua B, 456)"
                    value={endLocation}
                    onChange={(e) => setEndLocation(e.target.value)}
                />
                <button type="submit">Solicitar Viagem</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Viagem;