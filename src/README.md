# Simple Rest API

Este arquivo contém a documentação dos endpoints da API.

## URL Base

A URL base para todos os endpoints é `localhost:3000`.

## Usuários

| Endpoint              | Método | Descrição                          |
|-----------------------|--------|------------------------------------|
| `/`                   | GET    | Obter todos os usuários            |
| `/:id`                | GET    | Obter usuário por ID               |
| `/:email`             | GET    | Obter usuário por email            |
| `/`                   | POST   | Criar usuário                      |
| `/:id`                | PUT    | Atualizar usuário por ID           |
| `/:id`                | DELETE | Excluir usuário por ID             |

### Obter todos os usuários

- **Método**: GET
- **Endpoint**: `/`

### Obter usuário por ID

- **Método**: GET
- **Endpoint**: `/:id`
- **Parâmetros de URL**:
  - `id`: ID do usuário

### Obter usuário por email

- **Método**: GET
- **Endpoint**: `/:email`
- **Parâmetros de URL**:
  - `email`: Email do usuário

### Criar usuário

- **Método**: POST
- **Endpoint**: `/`
- **Corpo da Requisição**:
  ```json
  {
      "nome": "John Doe",
      "email": "johndoe@example.com",
      "senha": "senha@123"
  }
  ```

### Atualizar usuário por ID

- **Método**: PUT
- **Endpoint**: `/:id`
- **Parâmetros de URL**:
  - `id`: ID do usuário
- **Corpo da Requisição**:
  ```json
  {
      "nome": "Joe Downes",
      "email": "joe@downes.com",
      "senha": "senha@123"
  }
  ```

### Excluir usuário por ID

- **Método**: DELETE
- **Endpoint**: `/:id`
- **Parâmetros de URL**:
  - `id`: ID do usuário
- **Corpo da Requisição**:
  ```json
  {
      "nome": "Joe Downes",
      "email": "joe@downes.com",
      "senha": "senha@123"
  }
  ```