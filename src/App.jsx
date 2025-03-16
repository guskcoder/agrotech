// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Importando os componentes de página
import HomePage from './pages/HomePage';
import SobreNosPage from './pages/SobreNosPage';
import ProdutosPage from './pages/ProdutosPage';
import ContatoPage from './pages/ContatoPage';
import LoginPage from './pages/LoginPage';
import RegistroPage from './pages/RegistroPage';

// Importando o provedor de autenticação
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-nos" element={<SobreNosPage />} />
            <Route path="/produtos" element={<ProdutosPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<RegistroPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

function Navbar() {
  const { usuarioLogado, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container-fluid bg-green">
      <nav className="navbar navbar-expand-lg">
        <div className="container px-4 py-4">
          <Link className="navbar-brand text-light" to="/">AgroConnect</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/sobre-nos">Sobre Nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/produtos">Nossos Produtos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contato">Fale Conosco</Link>
              </li>
              {usuarioLogado ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user-circle me-1"></i>
                    {usuarioLogado.nome}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user me-2"></i>Meu Perfil
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cog me-2"></i>Configurações
                      </a>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt me-2"></i>Sair
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">
                    <i className="fas fa-sign-in-alt me-1"></i>Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre-nos" className="nav-link px-2 text-body-secondary">Sobre Nós</Link>
          </li>
          <li className="nav-item">
            <Link to="/produtos" className="nav-link px-2 text-body-secondary">Nossos Produtos</Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link px-2 text-body-secondary">Fale Conosco</Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          &copy; 2024 AgroConnect, Inc.
        </p>
      </footer>
    </div>
  );
}

export default App;