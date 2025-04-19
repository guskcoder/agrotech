// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  return (
    <>
      {/* Banner Principal */}
      <div className="container-fluid bg-green">
        <section className="container">
          <div className="row">
            <div className="col-md-6 my-3 py-4 text-light">
              <h2 className="my-4">
                Transformando o campo com inovação: Tecnologia que cultiva o
                futuro da agronomia.
              </h2>
              <p className="mb-5">
                Soluções inteligentes para um agronegócio mais produtivo e
                sustentável.
              </p>
            </div>

            <div className="col-md-6 my-3 text-center">
              <img
                src="/images/imagem_banner.jpg"
                alt="Banner AgroConnect"
                className="img-fluid w-75 rounded-5 mb-3"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Seção Nossa Missão e História */}
      <section className="container-fluid mb-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-3">
              <h3>Nossa Missão</h3>
              <p className="pb-5">
                Capacitar pequenos produtores com ferramentas digitais para
                aumentar a produtividade, promovendo práticas agrícolas
                sustentáveis.
              </p>

              <div className="col-md-6 mt-4 text-center">
                <img
                  src="/images/imagem1.jpg"
                  alt="Nossa Missão"
                  className="img-fluid rounded-5"
                />
              </div>
            </div>
            <div className="col-md-6 my-3">
              <h3>Nossa História</h3>
              <p className="pb-4">
                A AgroConnect nasceu da necessidade de apoiar pequenos
                produtores agrícolas que enfrentam desafios diários para
                aumentar a sua produtividade. Com um desejo genuíno de fazer a
                diferença, a AgroConnect foi criada para tornar o mercado mais
                justo.
              </p>

              <div className="col-md-6 mt-4 text-center">
                <img
                  src="/images/imagem2.jpg"
                  alt="Nossa História"
                  className="img-fluid rounded-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Nossos Produtos */}
      <section className="container-fluid mb-5 py-5 bg-green">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-12 my-3 text-center">
              <h3 className="pb-5 text-light">Nossos Produtos</h3>

              <div className="row d-flex justify-content-around w-auto">
                <div className="col-md-3 p-4 bg-light rounded-5 mb-3 text-center product-item">
                  <i className="fas fa-chart-line fa-3x mb-3"></i>
                  <h5>Gestão de Recursos Financeiros</h5>
                  <p className="small mt-2">
                    Controle financeiro completo para sua produção agrícola
                  </p>
                </div>

                <div className="col-md-3 p-4 bg-light rounded-5 mb-3 text-center product-item">
                  <i className="fas fa-cloud-sun-rain fa-3x mb-3"></i>
                  <h5>Monitoramento Climático</h5>
                  <p className="small mt-2">
                    Previsões meteorológicas precisas para o planejamento da
                    safra
                  </p>
                </div>

                <div className="col-md-3 p-4 bg-light rounded-5 mb-3 text-center product-item">
                  <i className="fas fa-store fa-3x mb-3"></i>
                  <h5>Mercado Digital</h5>
                  <p className="small mt-2">
                    Conectando produtores e compradores sem intermediários
                  </p>
                </div>
              </div>

              <Link to="/produtos" className="btn btn-light mt-5">
                Mais informações
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
