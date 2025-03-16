// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Criando o contexto de autenticação
const AuthContext = createContext();

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

// Provedor do contexto de autenticação
export const AuthProvider = ({ children }) => {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [carregando, setCarregando] = useState(true);

  // Verificar se há um usuário logado no localStorage ao iniciar a aplicação
  useEffect(() => {
    const usuario = localStorage.getItem('usuarioLogado');
    if (usuario) {
      setUsuarioLogado(JSON.parse(usuario));
    }
    setCarregando(false);
  }, []);

  // Função para fazer login
  const login = (usuario) => {
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    setUsuarioLogado(usuario);
  };

  // Função para fazer logout
  const logout = () => {
    localStorage.removeItem('usuarioLogado');
    setUsuarioLogado(null);
  };

  // Valores e funções disponibilizados pelo contexto
  const value = {
    usuarioLogado,
    carregando,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
