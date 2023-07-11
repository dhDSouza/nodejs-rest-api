# nodejs-rest-api

## Sumário

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Como Utilizar](#como-utilizar)
- [Licença](#licença)

## Descrição do Projeto

Esta é uma implementação simples de API Rest de usuários em Node.js.

## Tecnologias Utilizadas

- [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks): Utilizado para automatizar tarefas relacionadas ao Git. Neste projeto, os Git Hooks são implementados usando as seguintes ferramentas:
  - [Husky](https://typicode.github.io/husky/#/): Husky é uma ferramenta que permite a execução de scripts e gatilhos antes de confirmar alterações no repositório Git.
  - [ESLint](https://eslint.org/): O ESLint é uma ferramenta de linting e formatação de código JavaScript, usada para manter um código consistente e sem erros.
  - [lint-staged](https://github.com/okonet/lint-staged): O lint-staged é uma ferramenta usada em conjunto com o Husky e o ESLint para executar o linting e a formatação de código apenas nos arquivos modificados antes de confirmar as alterações no Git.

- [NPM (Node.js Package Manager)](https://www.npmjs.com/): O NPM é o gerenciador de pacotes padrão para projetos em Node.js. Ele é usado para instalar as dependências do projeto e gerenciar scripts personalizados.

- [Docker](https://www.docker.com/): O Docker é uma plataforma que permite criar e executar contêineres de aplicativos. Neste projeto, é utilizado para facilitar a configuração e execução do ambiente do MongoDB.

- [Postman](https://www.postman.com/): O Postman é uma ferramenta de desenvolvimento de APIs que permite testar e documentar APIs. Neste projeto, é utilizado para importar uma coleção de solicitações HTTP pré-configuradas e facilitar os testes da API REST.

## Pré-requisitos

Antes de começar, verifique se você possui os seguintes pré-requisitos instalados:

- Docker (opcional): [Instale o Docker](https://docs.docker.com/get-docker/)
- Node.js: [Instale o Node.js](https://nodejs.org/)

## Como Utilizar

Siga as etapas abaixo para configurar e executar o projeto localmente:

1. **Clone o repositório:**

   ```shell
   git clone https://github.com/dhDSouza/nodejs-rest-api.git
   ```

2. **Instale as dependências:**

   ```shell
   npm install
   ```

3. **Execute o MongoDB usando o Docker Compose:**

   Certifique-se de ter o Docker instalado em sua máquina. Em seguida, execute o arquivo `mongodb-script.sh` localizado na pasta `scripts`. Isso iniciará um contêiner do MongoDB configurado de acordo com o arquivo `docker-compose.yml` fornecido. Se preferir pode simplesmente executar o seguinte comando em seu terminal na pasta `scripts` onde contém  o arquivo `docker-compose.yml`:

   ```shell
   docker-compose up -d
   ```

4. **Importe a coleção do Postman:**

   Certifique-se de ter o Postman instalado em sua máquina. Em seguida, abra o Postman e importe o arquivo `nodejs-rest-api-postman-collection.json` localizado na pasta `collection`. Isso importará as solicitações HTTP pré-configuradas para testar a API REST.

5. **Configure as variáveis de ambiente:**

   Renomeie o arquivo `.env.example` para `.env` e preencha as informações de configuração, se necessário.

   ```shell
   DB_DIALECT=
   DB_HOST=
   DB_PORT=
   DB_NAME=
   PORT=
   ```
   `DB_DIALECT`: Dialeto do banco de dados utilizado. Para este projeto está sendo utilizado o MongoDB então preencha com `mongodb`.
   `DB_HOST`: Local onde o banco de dados está hospedado, se estiver rodadando em sua máquina, como no exemplo deste projeto o valor é `localhost`.
   `DB_PORT`: Por padrão o MongoDB utiliza a porta `27017` então preencha este campo com este valor.
   `DB_NAME`: Nome do banco de dados, dê o nome que você preferir.
   `PORT`: Variável resposável por definir a porta em que a aplicação irá rodar, colque a porta de sua preferência. Caso esta variável esteja vazia, por padrão a aplicação irá rodar na porta `3000`.

6. **Execute a aplicação:**

   ```shell
   npm start
   ```

   Isso iniciará a aplicação e o servidor estará disponível no endereço `http://localhost:3000`.

7. **Teste a API:**

   Use o Postman importado para enviar solicitações HTTP à [API](./src/README.md) e testar suas funcionalidades.

## Licença

Este projeto está licenciado nos termos da Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
