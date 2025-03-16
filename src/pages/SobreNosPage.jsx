// src/pages/SobreNosPage.jsx
import React from 'react';
import '../App.css';

const SobreNosPage = () => {
  return (
    <>
      {/* Primeira parte (Hero Section) */}
      <section
        className="hero-section text-center text-light p-5"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/agronomia-empresa.jpg')`,
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
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="mb-4">Nossa Empresa</h2>
            <div className="about-text">
              <p>
                AgroConnect é uma empresa dedicada a impulsionar o agronegócio rumo a um futuro mais tecnológico, 
                eficiente e sustentável. Por meio de soluções que integram IoT, inteligência artificial e análise 
                de dados avançada, nossa empresa oferece ferramentas para que agricultores possam aumentar sua 
                produtividade e alcançar a sustentabilidade.
              </p>
              <p>
                Comprometida com a inovação, a AgroConnect promove uma nova era para a agricultura, onde decisões 
                são baseadas em dados e onde cada etapa do processo agrícola é otimizada para garantir os melhores 
                resultados e preservar o meio ambiente.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="/images/empresa.jpg" 
              alt="Empresa" 
              className="company-image img-fluid rounded shadow" 
            />
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
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3 className="h4 mb-3">Nossa Missão</h3>
                  <p>
                    Acelerar a transformação digital no agronegócio, oferecendo tecnologias acessíveis e 
                    práticas que impulsionam a produtividade e sustentabilidade.
                  </p>
                  <p>
                    Nossa missão é capacitar produtores do setor agrícola a crescerem e prosperarem, 
                    enfrentando os desafios do futuro com soluções que fazem a diferença no presente.
                  </p>
                </div>
              </div>
            </div>

            {/* Visão */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-4 text-justify">
                <div className="card-body">
                  <div className="icon-box">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="h4 mb-3">Nossa Visão</h3>
                  <p>
                    Ser uma referência global em tecnologia para o agronegócio, reconhecida pela nossa 
                    capacidade de revolucionar o setor com soluções que promovem um futuro mais sustentável, 
                    inteligente e produtivo.
                  </p>
                  <p>
                    Aspiramos a liderar a transformação digital do campo, ajudando a criar uma agricultura 
                    mais eficiente, lucrativa e consciente.
                  </p>
                </div>
              </div>
            </div>

            {/* Valores */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-4 text-center">
                <div className="card-body">
                  <div className="icon-box">
                    <i className="fas fa-heart"></i>
                  </div>
                  <h3 className="h4 mb-3">Nossos Valores</h3>
                  <ul className="list-unstyled text-start">
                    <li><i className="fas fa-check-circle text-primary me-2"></i>Inovação Transformadora</li>
                    <li><i className="fas fa-check-circle text-primary me-2"></i>Sustentabilidade em Primeiro Lugar</li>
                    <li><i className="fas fa-check-circle text-primary me-2"></i>Parceria com o produtor</li>
                    <li><i className="fas fa-check-circle text-primary me-2"></i>Acessibilidade e inclusão</li>
                    <li><i className="fas fa-check-circle text-primary me-2"></i>Ética e Transparência</li>
                    <li><i className="fas fa-check-circle text-primary me-2"></i>Empoderamento do produtor</li>
                    <li><i className="fas fa-check-circle text-primary me-2"></i>Compromisso com resultados</li>
                    <li><i className="fas fa-check-circle text-primary me-2"></i>Responsabilidade Social e Comunitária</li>
                    <li><i className="fas fa-check-circle text-primary me-2"></i>Inspiração para o futuro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Segunda Imagem */}
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
              <img 
                src="/images/sobre-empresa.jpg" 
                alt="Nossa Estrutura" 
                className="company-image img-fluid rounded shadow" 
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="mb-4">Nossa Estrutura</h2>
              <div className="about-text">
                <p>
                  Com uma equipe multidisciplinar de especialistas em tecnologia, agronomia e negócios, a AgroConnect 
                  está estruturada para oferecer soluções completas e integradas que atendem às necessidades específicas 
                  de cada produtor rural.
                </p>
                <p>
                  Nossa infraestrutura tecnológica de ponta nos permite desenvolver, implementar e dar suporte a 
                  sistemas que transformam a maneira como o agronegócio opera, sempre com foco na usabilidade, 
                  eficiência e resultados tangíveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          padding: 80px 0;
        }
        
        .section-padding {
          padding: 70px 0;
        }
        
        .card {
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .icon-box {
          font-size: 2.5rem;
          color: #FFEB3B;
          margin-bottom: 20px;
        }
        
        .company-image {
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          max-height: 300px;
          object-fit: cover;
          width: 100%;
        }
        
        .about-text {
          text-align: justify;
          line-height: 2;
        }
        
        @media (max-width: 768px) {
          .section-padding {
            padding: 40px 15px;
          }
          
          .about-text {
            padding: 0 15px;
          }
          
          .card-body {
            padding: 15px;
          }
          
          h2, h3 {
            padding: 0 15px;
          }
          
          .hero-section {
            padding: 60px 15px;
          }
        }
      `}</style>
    </>
  );
};

export default SobreNosPage;
