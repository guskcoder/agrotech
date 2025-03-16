// src/pages/SobreNosPage.jsx
import React from 'react';

const SobreNosPage = () => {
  return (
    <>
      {/* CDN do Bootstrap e FontAwesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.1/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />

      {/* Conteúdo da página */}
      <div className="container-fluid bg-green">
        {/* Início Menu */}
        <nav className="navbar navbar-expand-lg">
          <div className="container px-4 py-4">
            <a className="navbar-brand text-light" href="#">AgroConnect</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-filter-right text-light"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link text-light" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/sobre-nos">Sobre Nós</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/produtos">Nossos Produtos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/contato">Fale Conosco</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Fim menu */}

        {/* Primeira parte (Hero Section) */}
        <section
          className="hero-section text-center text-light p-5"
          style={{
            background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/agronomia_empresa.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <h1 className="display-4 mb-4">Sobre Nós</h1>
          <p className="lead">Plantando tecnologia hoje para colher um futuro sustentável e próspero no agronegócio.</p>
        </section>

        {/* Sobre a Empresa Section */}
        <section className="section-padding container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2>Nossa Empresa</h2>
              <p>
                AgroConnect é uma empresa dedicada a impulsionar o agronegócio rumo a um futuro mais tecnológico, eficiente e sustentável.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="/images/Empresa.jpg" alt="Empresa" className="company-image img-fluid rounded shadow" />
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="row mb-5">
              {/* Missão */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 p-4 text-justify">
                  <div className="card-body">
                    <div className="icon-box">
                      <i className="bi bi-bullseye"></i>
                    </div>
                    <h3 className="h4 mb-3">Nossa Missão</h3>
                    <p>Acelerar a transformação digital no agronegócio, oferecendo tecnologias acessíveis e práticas que impulsionam a produtividade e sustentabilidade.</p>
                  </div>
                </div>
              </div>

              {/* Visão */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 p-4 text-justify">
                  <div className="card-body">
                    <div className="icon-box">
                      <i className="bi bi-eye"></i>
                    </div>
                    <h3 className="h4 mb-3">Nossa Visão</h3>
                    <p>Ser uma referência global em tecnologia para o agronegócio, reconhecida pela nossa capacidade de revolucionar o setor com soluções que promovem um futuro mais sustentável, inteligente e produtivo.</p>
                  </div>
                </div>
              </div>

              {/* Valores */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 p-4 text-center">
                  <div className="card-body">
                    <div className="icon-box">
                      <i className="bi bi-heart"></i>
                    </div>
                    <h3 className="h4 mb-3">Nossos Valores</h3>
                    <ul className="list-unstyled text-start">
                      <li><i className="bi bi-check2-circle text-primary me-2"></i>Inovação Transformadora;</li>
                      <li><i className="bi bi-check2-circle text-primary me-2"></i>Sustentabilidade em Primeiro Lugar;</li>
                      <li><i className="bi bi-check2-circle text-primary me-2"></i>Parceria com o produtor;</li>
                      <li><i className="bi bi-check2-circle text-primary me-2"></i>Acessibilidade e inclusão;</li>
                      <li><i className="bi bi-check2-circle text-primary me-2"></i>Ética e Transparência;</li>
                      <li><i className="bi bi-check2-circle text-primary me-2"></i>Empoderamento do produtor;</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="py-3 my-4 text-center">
          <p className="text-muted">© 2024 AgroConnect, Inc.</p>
        </footer>
      </div>

      {/* CDN do Bootstrap JavaScript */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default SobreNosPage;
