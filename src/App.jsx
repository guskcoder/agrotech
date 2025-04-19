// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

// Importando os componentes de página
import HomePage from "./pages/HomePage";
import SobreNosPage from "./pages/SobreNosPage";
import ProdutosPage from "./pages/ProdutosPage";
import ContatoPage from "./pages/ContatoPage";
import LoginPage from "./pages/LoginPage";
import RegistroPage from "./pages/RegistroPage";

// Importando o provedor de autenticação
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Router>
          <AuthProvider>
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre-nos" element={<SobreNosPage />} />
                <Route path="/produtos" element={<ProdutosPage />} />
                <Route path="/contato" element={<ContatoPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro" element={<RegistroPage />} />
              </Routes>
            </main>
            <Footer />
          </AuthProvider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

function Navbar() {
  const { usuarioLogado, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container px-4 py-4">
        <Link className="navbar-brand" to="/">
          AgroConnect
        </Link>
        <div className="d-flex align-items-center">
          <div className="d-lg-none me-3">
            <ThemeToggle />
          </div>
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
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-nos">
                Sobre Nós
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/produtos">
                Nossos Produtos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato">
                Fale Conosco
              </Link>
            </li>
            {usuarioLogado ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
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
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt me-2"></i>Sair
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fas fa-sign-in-alt me-1"></i>Login
                </Link>
              </li>
            )}
            <li className="nav-item d-none d-lg-block">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 footer-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre-nos" className="nav-link px-2 footer-link">
              Sobre Nós
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/produtos" className="nav-link px-2 footer-link">
              Nossos Produtos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link px-2 footer-link">
              Fale Conosco
            </Link>
          </li>
        </ul>
        <p className="text-center footer-copyright">
          &copy; 2024 AgroConnect, Inc.
        </p>
      </footer>
    </div>
  );
}

export default App;
