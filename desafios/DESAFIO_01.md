# Desafio CRUD com Insomnia

## Objetivo
Criar uma API simples de CRUD utilizando o Insomnia para a rota `localhost:3000/users`.

## Estrutura de Dados
Cada usuário deve conter o seguinte formato:

```json
{
  "id": "1",
  "username": "Admin",
  "email": "admin@admin.com.br",
  "password": "123123",
  "address": {
    "street": "Rua 1",
    "number": "123",
    "city": "Cidade",
    "state": "SP",
    "country": "Brasil"
  }
}
```

## Endpoints

### 1. **Criar Usuário**
- **Método:** POST
- **Rota:** `/users`
- **Body:**
```json
{
  "username": "Admin",
  "email": "admin@admin.com.br",
  "password": "123123",
  "address": {
    "street": "Rua 1",
    "number": "123",
    "city": "Cidade",
    "state": "SP",
    "country": "Brasil"
  }
}
```

### 2. **Listar Usuários**
- **Método:** GET
- **Rota:** `/users`

### 3. **Buscar Usuário por ID**
- **Método:** GET
- **Rota:** `/users/{id}`

### 4. **Atualizar Usuário**
- **Método:** PUT
- **Rota:** `/users/{id}`
- **Body:**
```json
{
  "username": "NovoNome",
  "email": "novoemail@exemplo.com",
  "password": "novaSenha",
  "address": {
    "street": "Nova Rua",
    "number": "456",
    "city": "Nova Cidade",
    "state": "RJ",
    "country": "Brasil"
  }
}
```

### 5. **Deletar Usuário**
- **Método:** DELETE
- **Rota:** `/users/{id}`

## Desafio Extra
- Implementar validação para que o campo `email` seja único.
- Garantir que a senha tenha pelo menos 6 caracteres.
- Retornar mensagens de erro apropriadas para cada caso.

## Dicas
- Utilize o Insomnia para criar as requisições e testar os endpoints.
- Certifique-se de que o servidor está rodando na porta 3000.

---

Bons estudos! 🚀

