import React from "react";

const VideoPitch = () => {
  return (
    <section id="videopitch" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Vídeo Pitch</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Link do Video</h3>
            <p className="text-justify">
              Nosso vídeo de apresentação está disponível no YouTube. Você pode
              assisti-lo para conhecer melhor nosso projeto e entender como
              estamos trabalhando para impulsionar o avanço tecnológico na
              agricultura. Não perca essa oportunidade de se inspirar e se
              engajar na transformação do campo com inovação! Clique no botão
              para assistir. 🌱🌍📹
            </p>
            <a
              href="https://www.youtube.com/watch?v=qA9GxgDMGNU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">Ver o vídeo</button>
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/images/imagem_pitch.jpg"
              alt="Imagem Pitch"
              className="img-fluid rounded w-75 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPitch;
