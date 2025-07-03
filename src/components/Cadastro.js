import React, { useState } from 'react';

function Cadastro() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/api/passageiro/cadastro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, password })
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setError('');
                console.log('User ID:', data.user_id);
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
            <h2>Cadastro Autobix</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Telefone (+5512997781890)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Cadastro;