// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  // Usuário de teste
  const usuarioTeste = {
    email: 'teste@agroconnect.com.br',
    senha: '123456',
    nome: 'Usuário Teste'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    // Simulando um atraso de rede
    setTimeout(() => {
      if (email === usuarioTeste.email && senha === usuarioTeste.senha) {
        // Login bem-sucedido
        const dadosUsuario = { email, nome: usuarioTeste.nome };
        login(dadosUsuario);
        navigate('/');
      } else {
        // Login falhou
        setErro('E-mail ou senha incorretos. Tente novamente.');
      }
      setCarregando(false);
    }, 1000);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Acesso à Plataforma</h2>
                <p className="text-muted">Entre com suas credenciais para acessar</p>
              </div>

              {erro && (
                <div className="alert alert-danger" role="alert">
                  {erro}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <a href="#" className="text-decoration-none small">Esqueceu a senha?</a>
                  </div>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="senha"
                      placeholder="Sua senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="lembrar"
                    checked={lembrar}
                    onChange={(e) => setLembrar(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="lembrar">Lembrar-me</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2"
                  disabled={carregando}
                >
                  {carregando ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Entrando...
                    </>
                  ) : (
                    'Entrar'
                  )}
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="mb-0">Não tem uma conta? <Link to="/registro" className="text-decoration-none">Cadastre-se</Link></p>
              </div>

              <div className="mt-4 pt-3 border-top">
                <div className="alert alert-info" role="alert">
                  <strong>Usuário de teste:</strong><br/>
                  E-mail: teste@agroconnect.com.br<br/>
                  Senha: 123456
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          border-radius: 10px;
        }
        
        .input-group-text {
          border-right: none;
        }
        
        .form-control {
          border-left: none;
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

export default LoginPage;
