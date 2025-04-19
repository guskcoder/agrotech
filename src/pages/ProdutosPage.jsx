// src/pages/ProdutosPage.jsx
import React from "react";
import "../App.css";

const ProdutosPage = () => {
  return (
    <>
      {/* Conteúdo da Página */}
      <div className="container py-5">
        <h1 className="text-center mb-3">Nossos Produtos</h1>
        <p className="text-center mb-5">
          Soluções digitais integradas para impulsionar o agronegócio
        </p>

        {/* Produtos */}
        <div className="row g-4 mb-5">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm product-card">
              <div className="card-body">
                <span className="product-tag">Assistência</span>
                <h3 className="card-title">Consultoria Online</h3>
                <p className="card-text">
                  Assistência técnica especializada e consultoria agrícola
                  disponível 24/7 através da nossa plataforma digital.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Atendimento com especialistas em tempo real
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Diagnóstico remoto de problemas
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Recomendações personalizadas
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Suporte técnico via chat e videoconferência
                  </li>
                </ul>
                <button className="btn btn-primary w-100">
                  Contratar Serviço
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm product-card">
              <div className="card-body">
                <span className="product-tag">Clima</span>
                <h3 className="card-title">Monitoramento Climático</h3>
                <p className="card-text">
                  Sistema avançado de monitoramento e previsão climática para
                  otimizar sua produção agrícola.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Previsões meteorológicas precisas
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Alertas de condições adversas
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Histórico climático da região
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Recomendações de manejo baseadas no clima
                  </li>
                </ul>
                <button className="btn btn-primary w-100">
                  Conhecer Sistema
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm product-card">
              <div className="card-body">
                <span className="product-tag">Marketplace</span>
                <h3 className="card-title">Mercado Digital Local</h3>
                <p className="card-text">
                  Plataforma de comercialização digital para conectar produtores
                  locais e compradores.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Vitrine digital para seus produtos
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Conexão direta com compradores
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Sistema de avaliações e feedback
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Logística integrada
                  </li>
                </ul>
                <button className="btn btn-primary w-100">
                  Acessar Marketplace
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm product-card">
              <div className="card-body">
                <span className="product-tag">Finanças</span>
                <h3 className="card-title">Gestão Financeira Rural</h3>
                <p className="card-text">
                  Solução completa para gestão financeira e acesso facilitado a
                  crédito rural.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Controle de receitas e despesas
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Análise de viabilidade de crédito
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Acesso a linhas de financiamento
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 check-icon"></i>
                    Relatórios financeiros detalhados
                  </li>
                </ul>
                <button className="btn btn-primary w-100">Começar Agora</button>
              </div>
            </div>
          </div>
        </div>

        {/* Características */}
        <div className="row text-center mb-5">
          <h2 className="mb-4">Por que escolher a AgroConnect?</h2>

          <div className="col-md-3 mb-4">
            <div className="feature-icon">
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h4>Suporte Personalizado</h4>
            <p>Atendimento dedicado para cada produtor rural.</p>
          </div>

          <div className="col-md-3 mb-4">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h4>Acesso Mobile</h4>
            <p>Todas as soluções na palma da sua mão.</p>
          </div>

          <div className="col-md-3 mb-4">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4>Segurança</h4>
            <p>Seus dados protegidos com a máxima segurança.</p>
          </div>

          <div className="col-md-3 mb-4">
            <div className="feature-icon">
              <i className="fas fa-sync"></i>
            </div>
            <h4>Integração Total</h4>
            <p>Todas as soluções funcionam em conjunto.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-5">
          <h2>Pronto para digitalizar sua produção?</h2>
          <p className="mb-4">
            Conheça nossas soluções e transforme sua fazenda com tecnologia.
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Agendar Demonstração Gratuita
          </a>
        </div>
      </div>

      <style jsx>{`
        .product-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }

        .btn-primary {
          background-color: #307a40;
          border-color: #307a40;
        }

        .btn-primary:hover {
          background-color: #256331;
          border-color: #256331;
        }

        .feature-icon {
          color: #ffeb3b;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .product-tag {
          background-color: #ffeb3b;
          color: #333;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.9rem;
          display: inline-block;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

export default ProdutosPage;
