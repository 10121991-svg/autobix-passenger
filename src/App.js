import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PassengerHome from './components/PassengerHome';
import DriverHome from './components/DriverHome';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        {/* Cabeçalho */}
        <header className="bg-black bg-opacity-50 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Urbiix Car</h1>
            <ul className="flex space-x-4">
              <li><Link to="/motorista" className="hover:text-blue-400">Página do motorista</Link></li>
              <li><Link to="/passageiro" className="hover:text-blue-400">Passageiro</Link></li>
              <li><Link to="/parceiros" className="hover:text-blue-400">Parceiros</Link></li>
              <li><Link to="/sobre" className="hover:text-blue-400">Sobre nós</Link></li>
            </ul>
          </nav>
        </header>

        {/* Rotas */}
        <Routes>
          <Route path="/passageiro" element={<PassengerHome />} />
          <Route path="/motorista" element={<DriverHome />} />
          <Route path="/parceiros" element={
            <section className="container mx-auto text-center py-20 text-white">
              <h2 className="text-4xl font-bold mb-4">Parceiros</h2>
              <p className="text-xl mb-6">Junte-se à nossa rede de parceiros!</p>
            </section>
          } />
          <Route path="/sobre" element={
            <section className="container mx-auto text-center py-20 text-white">
              <h2 className="text-4xl font-bold mb-4">Sobre Nós</h2>
              <p className="text-xl mb-6">Conheça a história da Urbiix Car!</p>
            </section>
          } />
          <Route path="/" element={
            <section className="container mx-auto text-center py-20 text-white">
              <h2 className="text-4xl font-bold mb-4">Urbiix Car</h2>
              <p className="text-xl mb-6">Escolha como você quer viajar ou trabalhar!</p>
              <div className="flex justify-center space-x-4">
                <Link to="/passageiro"><button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Sou Passageiro</button></Link>
                <Link to="/motorista"><button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Sou Motorista</button></Link>
              </div>
            </section>
          } />
        </Routes>

        {/* Seção de Diferenciais */}
        <section className="bg-white bg-opacity-90 py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Por que escolher a Urbiix Car?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Feito de pessoas para pessoas</h4>
                <p>Parceria e confiança com atendimento personalizado via app, WhatsApp ou ligação.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Mais segurança nas suas viagens</h4>
                <p>Motoristas avaliados, treinados e veículos vistoriados regularmente.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">O melhor para o seu bolso</h4>
                <p>Preços acessíveis para passageiros e mais ganhos para motoristas.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Nascido e criado no Brasil</h4>
                <p>Nascido e criado no Brasil.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de FAQs */}
        <section className="container mx-auto py-16 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">O que é a Urbiix Car?</h4>
              <p>A Urbiix Car conecta motoristas e passageiros com rapidez, conforto e preços justos.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Como faço para começar a usar o aplicativo?</h4>
              <p>Baixe o app, cadastre-se e solicite sua carona!</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Como são escolhidos os motoristas?</h4>
              <p>Passam por avaliações rigorosas e treinamentos de conduta.</p>
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="bg-black bg-opacity-50 text-white p-8">
          <div className="container mx-auto text-center">
            <p className="mb-4">Acompanhe a Urbiix Car nas redes sociais!</p>
            <ul className="flex justify-center space-x-4">
              <li><a href="https://facebook.com" className="hover:text-blue-400">Facebook</a></li>
              <li><a href="https://instagram.com" className="hover:text-blue-400">Instagram</a></li>
              <li><a href="https://twitter.com" className="hover:text-blue-400">Twitter</a></li>
            </ul>
            <p className="mt-4">Copyright © 2024 Urbiix Car - Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;