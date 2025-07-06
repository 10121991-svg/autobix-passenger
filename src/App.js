import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Viagem from './components/Viagem';
import DriverHome from './components/DriverHome';
import PassengerHome from './components/PassengerHome';
import Map from './components/Map';

function App() {
    return (
        <BrowserRouter>
            <div className="container mx-auto p-4">
                <nav className="flex space-x-4 mb-4">
                    <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                    <Link to="/cadastro" className="text-blue-600 hover:underline">Cadastro</Link>
                    <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                    <Link to="/viagem" className="text-blue-600 hover:underline">Solicitar Viagem</Link>
                    <Link to="/motorista" className="text-blue-600 hover:underline">Página do Motorista</Link>
                    <Link to="/parceiros" className="text-blue-600 hover:underline">Parceiros</Link>
                    <Link to="/sobre" className="text-blue-600 hover:underline">Sobre Nós</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<PassengerHome />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/viagem" element={<Viagem />} />
                    <Route path="/motorista" element={<DriverHome />} />
                    <Route path="/parceiros" element={<div><h2>Parceiros</h2><p>Em desenvolvimento</p></div>} />
                    <Route path="/sobre" element={<div><h2>Sobre Nós</h2><p>Em desenvolvimento</p></div>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;