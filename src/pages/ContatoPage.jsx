// src/pages/ContatoPage.jsx
import React, { useState, useEffect } from 'react';
import '../App.css';

const ContatoPage = () => {
  // Estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  // Estados para erros de validação
  const [erros, setErros] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  
  // Estado para modal de sucesso
  const [mostrarModal, setMostrarModal] = useState(false);
  
  // Contador de caracteres
  const [caracteresContados, setCaracteresContados] = useState(0);
  
  // Função para validar nome completo
  const validarNomeCompleto = (nome) => {
    if (!nome.trim()) {
      return { valido: false, mensagem: 'O nome não pode estar em branco.' };
    }
    if (nome.trim().split(' ').length < 2) {
      return { valido: false, mensagem: 'Por favor, insira nome e sobrenome.' };
    }
    return { valido: true };
  };
  
  // Função para validar email
  const validarEmail = (email) => {
    if (!email.trim()) {
      return { valido: false, mensagem: 'O e-mail não pode estar em branco.' };
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      return { valido: false, mensagem: 'Por favor, insira um e-mail válido.' };
    }
    return { valido: true };
  };
  
  // Função para validar mensagem
  const validarMensagem = (mensagem) => {
    const comprimento = mensagem.trim().length;
    if (!mensagem.trim()) {
      return { valido: false, mensagem: 'A mensagem não pode estar em branco.' };
    }
    if (comprimento < 30) {
      return { valido: false, mensagem: 'A mensagem deve ter pelo menos 30 caracteres.' };
    }
    if (comprimento > 500) {
      return { valido: false, mensagem: 'A mensagem não pode ter mais de 500 caracteres.' };
    }
    return { valido: true };
  };
  
  // Função para formatar telefone
  const formatarTelefone = (valor) => {
    const apenasDigitos = valor.replace(/\D/g, '').substring(0, 11);
    
    let telefoneFormatado = apenasDigitos.replace(/^(\d{2})(\d)/g, '($1) $2');
    telefoneFormatado = telefoneFormatado.replace(/(\d)(\d{4})$/, '$1-$2');
    
    return telefoneFormatado;
  };
  
  // Handler para mudança no campo de telefone
  const handleTelefoneChange = (e) => {
    const valorFormatado = formatarTelefone(e.target.value);
    setTelefone(valorFormatado);
  };
  
  // Handler para mudança no campo de mensagem
  const handleMensagemChange = (e) => {
    const valor = e.target.value;
    setMensagem(valor);
    setCaracteresContados(valor.length);
  };
  
  // Handler para submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Limpar erros anteriores
    setErros({
      nome: '',
      email: '',
      mensagem: ''
    });
    
    let formValido = true;
    const novosErros = {};
    
    // Validar nome
    const validacaoNome = validarNomeCompleto(nome);
    if (!validacaoNome.valido) {
      novosErros.nome = validacaoNome.mensagem;
      formValido = false;
    }
    
    // Validar email
    const validacaoEmail = validarEmail(email);
    if (!validacaoEmail.valido) {
      novosErros.email = validacaoEmail.mensagem;
      formValido = false;
    }
    
    // Validar mensagem
    const validacaoMensagem = validarMensagem(mensagem);
    if (!validacaoMensagem.valido) {
      novosErros.mensagem = validacaoMensagem.mensagem;
      formValido = false;
    }
    
    // Atualizar erros
    setErros(novosErros);
    
    if (formValido) {
      // Limpar o formulário
      setNome('');
      setEmail('');
      setTelefone('');
      setAssunto('');
      setMensagem('');
      setCaracteresContados(0);
      
      // Mostrar modal de sucesso
      setMostrarModal(true);
    }
  };
  
  // Fechar o modal
  const fecharModal = () => {
    setMostrarModal(false);
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section mb-5">
        <div className="container text-center">
          <h1 className="display-4 mb-4">Entre em Contato</h1>
          <p className="lead">Estamos aqui para ajudar e responder às suas dúvidas</p>
        </div>
      </section>

      {/* Conteúdo da Página */}
      <div className="container mb-5">
        <h1 className="text-center mb-5">Entre em Contato</h1>

        <div className="row">
          {/* Informações de Contato */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h3 className="card-title mb-4">Informações de Contato</h3>

                <div className="mb-4">
                  <h5><i className="fas fa-clock me-2 text-primary"></i>Horário de Funcionamento</h5>
                  <p className="ms-4 mb-2">Segunda a Sexta: 8h às 18h</p>
                  <p className="ms-4 mb-0">Sábado: 8h às 12h</p>
                </div>

                <div className="mb-4">
                  <h5><i className="fas fa-phone me-2 text-primary"></i>Telefones</h5>
                  <p className="ms-4 mb-2">(11) 4002-8922</p>
                  <p className="ms-4 mb-0">WhatsApp: (11) 98765-4321</p>
                </div>

                <div className="mb-4">
                  <h5><i className="fas fa-envelope me-2 text-primary"></i>Email</h5>
                  <p className="ms-4 mb-0">contato@agroconnect.com.br</p>
                </div>

                <div>
                  <h5><i className="fas fa-map-marker-alt me-2 text-primary"></i>Endereço</h5>
                  <p className="ms-4 mb-0">Av. das Plantações, 1234</p>
                  <p className="ms-4 mb-0">Centro - São Paulo/SP</p>
                  <p className="ms-4 mb-0">CEP: 01234-567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="col-md-8 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h3 className="card-title mb-4">Envie sua Mensagem</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="nomeCompleto" className="form-label">Nome Completo*</label>
                    <input
                      type="text"
                      className={`form-control ${erros.nome ? 'is-invalid' : ''}`}
                      id="nomeCompleto"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                      placeholder="Digite seu nome completo"
                    />
                    {erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail*</label>
                    <input
                      type="email"
                      className={`form-control ${erros.email ? 'is-invalid' : ''}`}
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Digite seu e-mail"
                    />
                    {erros.email && <div className="invalid-feedback">{erros.email}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefone"
                      value={telefone}
                      onChange={handleTelefoneChange}
                      placeholder="(XX) XXXXX-XXXX"
                      maxLength="15"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="assunto" className="form-label">Assunto</label>
                    <select 
                      className="form-select" 
                      id="assunto"
                      value={assunto}
                      onChange={(e) => setAssunto(e.target.value)}
                    >
                      <option value="" selected>Selecione um assunto</option>
                      <option value="duvida">Dúvida</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="reclamacao">Reclamação</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensagem" className="form-label">Mensagem*</label>
                    <textarea
                      className={`form-control ${erros.mensagem ? 'is-invalid' : ''}`}
                      id="mensagem"
                      rows="5"
                      value={mensagem}
                      onChange={handleMensagemChange}
                      required
                      placeholder="Digite sua mensagem (mínimo 30 caracteres)"
                    ></textarea>
                    {erros.mensagem && <div className="invalid-feedback">{erros.mensagem}</div>}
                    <small className={`form-text ${caracteresContados > 500 ? 'text-danger' : 'text-muted'}`}>
                      {caracteresContados}/500 caracteres
                    </small>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane me-2"></i>Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Sucesso */}
      {mostrarModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center p-4">
                <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '4rem' }}></i>
                <h4 className="mt-3">Mensagem enviada com sucesso!</h4>
                <p className="mb-4">Em breve nossa equipe entrará em contato.</p>
                <button type="button" className="btn btn-success px-4" onClick={fecharModal}>Fechar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hero-section {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/contato-banner.jpg);
          background-size: cover;
          background-position: center;
          color: white;
          padding: 80px 0;
        }

        .card {
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .btn-primary {
          background-color: #307a40;
          border-color: #307a40;
        }

        .btn-primary:hover {
          background-color: #256331;
          border-color: #256331;
        }

        .text-primary {
          color: #307a40 !important;
        }
      `}</style>
    </>
  );
};

export default ContatoPage;
