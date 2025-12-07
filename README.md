# API de Filmes

[![Docker Image](https://img.shields.io/badge/DockerHub-emmanuelbm%2Fapi--filmes-blue?logo=docker&logoColor=white)](https://hub.docker.com/r/emmanuelbm/api-filmes)
Esta é uma API RESTful para gerenciar um catálogo de filmes. Permite criar, ler, atualizar e deletar filmes.

## ✨ Funcionalidades

- Listar todos os filmes
- Adicionar um novo filme

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

`GET /api/filmes`

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "titulo": "Cidade de Deus",
    "diretor": "Fernando Meirelles, Kátia Lund",
    "ano": 2002
  },
  {
    "id": 2,
    "titulo": "Tropa de Elite",
    "diretor": "José Padilha",
    "ano": 2007
  }
]
```

### Adicionar um novo filme

`POST /api/filmes`

**Corpo da requisição:**

```json
{
  "titulo": "O Auto da Compadecida",
  "diretor": "Guel Arraes",
  "ano": 2000
}
```

**Exemplo de resposta:**

```json
{
  "id": 3,
  "titulo": "O Auto da Compadecida",
  "diretor": "Guel Arraes",
  "ano": 2000
}
```

### Workflow de Desenvolvimento: GitFlow

Para a gestão de configuração e o ciclo de vida do desenvolvimento desta API, foi adotado o workflow

GitFlow.

A escolha por este modelo, mesmo para um projeto de escopo inicial pequeno, foi estratégica e se baseia nos seguintes motivos:

Estrutura Robusta para Crescimento: O GitFlow oferece uma estrutura sólida para gerenciar projetos maiores. A separação clara entre as branches

main (produção estável) e develop (ambiente de desenvolvimento para a próxima versão) garante que o projeto possa escalar com a adição de novas funcionalidades de forma organizada.

Desenvolvimento Isolado e Seguro: A implementação de novas funcionalidades, como a rota POST para adicionar filmes, foi realizada em uma feature branch (feature/adicionar-filme). Este isolamento garante que o código instável ou em desenvolvimento não afete a branch principal (

main) ou a de desenvolvimento (develop).

Controle de Versão e Lançamentos: O GitFlow é ideal para projetos que planejam ter múltiplos lançamentos (releases). O uso de

release branches atua como uma ponte entre o desenvolvimento e a produção, servindo como um ambiente de homologação (staging) onde os últimos testes e correções são feitos antes de integrar o código à main.

Manutenção Simplificada: O modelo define branches específicas para correções urgentes em produção (hotfix) e para correções durante a fase de release (

bugfix), padronizando a manutenção do código e mantendo a estabilidade das versões em produção.
