// src/pages/RegistroPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const RegistroPage = () => {
  const navigate = useNavigate();
  
  // Estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('produtor');
  const [termos, setTermos] = useState(false);
  
  // Estados para erros
  const [erros, setErros] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  
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
  
  // Validar formulário
  const validarFormulario = () => {
    const novosErros = {};
    
    // Validar nome
    if (!nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
    } else if (nome.trim().split(' ').length < 2) {
      novosErros.nome = 'Informe nome e sobrenome';
    }
    
    // Validar email
    if (!email.trim()) {
      novosErros.email = 'E-mail é obrigatório';
    } else {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email)) {
        novosErros.email = 'E-mail inválido';
      }
    }
    
    // Validar telefone
    if (telefone.trim() && telefone.replace(/\D/g, '').length < 10) {
      novosErros.telefone = 'Telefone inválido';
    }
    
    // Validar senha
    if (!senha) {
      novosErros.senha = 'Senha é obrigatória';
    } else if (senha.length < 6) {
      novosErros.senha = 'A senha deve ter pelo menos 6 caracteres';
    }
    
    // Validar confirmação de senha
    if (senha !== confirmarSenha) {
      novosErros.confirmarSenha = 'As senhas não coincidem';
    }
    
    // Validar termos
    if (!termos) {
      novosErros.termos = 'Você deve aceitar os termos e condições';
    }
    
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };
  
  // Handler para submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      setCarregando(true);
      
      // Simular um atraso de rede
      setTimeout(() => {
        // Simular registro bem-sucedido
        setSucesso(true);
        setCarregando(false);
        
        // Redirecionar para login após 3 segundos
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }, 1500);
    }
  };
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              {sucesso ? (
                <div className="text-center py-5">
                  <div className="mb-4">
                    <i className="fas fa-check-circle text-success" style={{ fontSize: '5rem' }}></i>
                  </div>
                  <h2 className="mb-3">Cadastro realizado com sucesso!</h2>
                  <p className="mb-4">Seu cadastro foi realizado com sucesso. Você será redirecionado para a página de login em instantes.</p>
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Carregando...</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center mb-4">
                    <h2 className="fw-bold">Crie sua conta</h2>
                    <p className="text-muted">Preencha os dados abaixo para se cadastrar</p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <label htmlFor="nome" className="form-label">Nome completo*</label>
                        <input
                          type="text"
                          className={`form-control ${erros.nome ? 'is-invalid' : ''}`}
                          id="nome"
                          placeholder="Digite seu nome completo"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          required
                        />
                        {erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">E-mail*</label>
                        <input
                          type="email"
                          className={`form-control ${erros.email ? 'is-invalid' : ''}`}
                          id="email"
                          placeholder="Digite seu e-mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        {erros.email && <div className="invalid-feedback">{erros.email}</div>}
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input
                          type="tel"
                          className={`form-control ${erros.telefone ? 'is-invalid' : ''}`}
                          id="telefone"
                          placeholder="(XX) XXXXX-XXXX"
                          value={telefone}
                          onChange={handleTelefoneChange}
                        />
                        {erros.telefone && <div className="invalid-feedback">{erros.telefone}</div>}
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label htmlFor="senha" className="form-label">Senha*</label>
                        <input
                          type="password"
                          className={`form-control ${erros.senha ? 'is-invalid' : ''}`}
                          id="senha"
                          placeholder="Crie uma senha"
                          value={senha}
                          onChange={(e) => setSenha(e.target.value)}
                          required
                        />
                        {erros.senha && <div className="invalid-feedback">{erros.senha}</div>}
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label htmlFor="confirmarSenha" className="form-label">Confirmar senha*</label>
                        <input
                          type="password"
                          className={`form-control ${erros.confirmarSenha ? 'is-invalid' : ''}`}
                          id="confirmarSenha"
                          placeholder="Confirme sua senha"
                          value={confirmarSenha}
                          onChange={(e) => setConfirmarSenha(e.target.value)}
                          required
                        />
                        {erros.confirmarSenha && <div className="invalid-feedback">{erros.confirmarSenha}</div>}
                      </div>
                      
                      <div className="col-md-12 mb-4">
                        <label className="form-label">Tipo de usuário*</label>
                        <div className="d-flex gap-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="tipoUsuario"
                              id="produtor"
                              value="produtor"
                              checked={tipoUsuario === 'produtor'}
                              onChange={() => setTipoUsuario('produtor')}
                            />
                            <label className="form-check-label" htmlFor="produtor">
                              Produtor Rural
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="tipoUsuario"
                              id="comprador"
                              value="comprador"
                              checked={tipoUsuario === 'comprador'}
                              onChange={() => setTipoUsuario('comprador')}
                            />
                            <label className="form-check-label" htmlFor="comprador">
                              Comprador
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="tipoUsuario"
                              id="fornecedor"
                              value="fornecedor"
                              checked={tipoUsuario === 'fornecedor'}
                              onChange={() => setTipoUsuario('fornecedor')}
                            />
                            <label className="form-check-label" htmlFor="fornecedor">
                              Fornecedor
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-12 mb-4">
                        <div className={`form-check ${erros.termos ? 'is-invalid' : ''}`}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="termos"
                            checked={termos}
                            onChange={(e) => setTermos(e.target.checked)}
                          />
                          <label className="form-check-label" htmlFor="termos">
                            Concordo com os <a href="#" className="text-decoration-none">termos de uso</a> e <a href="#" className="text-decoration-none">política de privacidade</a>
                          </label>
                        </div>
                        {erros.termos && <div className="invalid-feedback d-block">{erros.termos}</div>}
                      </div>
                      
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 py-2"
                          disabled={carregando}
                        >
                          {carregando ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Processando...
                            </>
                          ) : (
                            'Criar conta'
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                  
                  <div className="mt-4 text-center">
                    <p className="mb-0">Já tem uma conta? <Link to="/login" className="text-decoration-none">Faça login</Link></p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .card {
          border-radius: 10px;
        }
        
        .btn-primary {
          background-color: #307a40;
          border-color: #307a40;
        }
        
        .btn-primary:hover {
          background-color: #256331;
          border-color: #256331;
        }
      `}</style>
    </div>
  );
};

export default RegistroPage;
