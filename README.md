# AgroConnect

## Sobre o Projeto

O AgroConnect é uma plataforma digital que visa conectar pequenos produtores rurais com tecnologias e soluções para aumentar sua produtividade e sustentabilidade. O projeto oferece ferramentas como monitoramento climático, gestão financeira rural, consultoria online e um marketplace digital.

## Tecnologias Utilizadas

- React.js
- React Router DOM
- Bootstrap
- Font Awesome
- Vite

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `src/pages/`: Componentes de página (HomePage, SobreNosPage, ProdutosPage, ContatoPage)
- `src/styles/`: Estilos compartilhados entre os componentes
- `public/images/`: Imagens utilizadas no projeto

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Instalação

1. Clone o repositório
   ```bash
   git clone [URL_DO_REPOSITÓRIO]
   cd agrotech
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn
   ```

3. Execute o projeto em modo de desenvolvimento
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse o projeto no navegador
   ```
   http://localhost:5173
   ```

## Funcionalidades

- **Página Inicial**: Apresentação da empresa, missão e produtos
- **Sobre Nós**: Informações detalhadas sobre a empresa, missão, visão e valores
- **Produtos**: Detalhes sobre os serviços oferecidos pela plataforma
- **Contato**: Formulário de contato com validação e informações de contato da empresa

## Conversão de HTML para React

Este projeto foi convertido de páginas HTML estáticas para componentes React, mantendo a mesma estrutura visual e funcionalidades, mas aproveitando os benefícios do React como:

- Componentização
- Reutilização de código
- Gerenciamento de estado
- Roteamento entre páginas

## Próximos Passos

- Implementação de autenticação de usuários
- Integração com APIs de clima e mercado
- Desenvolvimento de dashboard para produtores
- Versão mobile da plataforma
