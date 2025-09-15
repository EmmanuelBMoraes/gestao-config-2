# API de Filmes

Esta é uma API RESTful para gerenciar um catálogo de filmes. Permite criar, ler, atualizar e deletar filmes.

## ✨ Funcionalidades

- Listar todos os filmes

## 🛠️ Tecnologias

As seguintes tecnologias foram utilizadas no desenvolvimento da API:

- **[Node.js](https://nodejs.org/en/)**
- **[Express.js](https://expressjs.com/pt-br/)** (ou o framework de sua preferência)
- **[TypeScript](https://www.typescriptlang.org/)**

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- Um gerenciador de pacotes, como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## 💿 Como Instalar e Executar

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

```bash
# 1. Clone este repositório
$ git clone

# 2. Acesse a pasta do projeto no seu terminal
$ cd api-filmes

# 3. Instale as dependências
$ npm install
# ou, se você usar o Yarn:
$ yarn install

# 4. Execute a aplicação
$ npm run start
# ou, para modo de desenvolvimento com hot-reload:
$ npm run dev
```

O servidor será iniciado na porta `8080` (ou outra porta que você tenha configurado). Você pode acessá-lo em `http://localhost:8080/api`.

## 📡 Endpoints da API

Aqui estão os endpoints disponíveis na API.

### Listar todos os filmes

`GET /filmes`

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "titulo": "O Poderoso Chefão",
    "ano": 1972
  },
  {
    "id": 2,
    "titulo": "Pulp Fiction",
    "ano": 1994
  }
]
```
