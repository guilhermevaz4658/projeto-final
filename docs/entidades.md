# Entidades do Sistema

## Entidades identificadas

| Entidade | Por que ela existe? | Tela relacionada |
|---|---|---|
| usuarios | O sistema tem cadastro e login de clientes | Login.jsx e Cadastro.jsx |


## Campos de cada entidade

### Entidade: usuarios

| Campo | Tipo sugerido | Obrigatório? | Observação |
|---|---|---|---|
| id | INT | sim | PK, AUTO_INCREMENT |
| nome | VARCHAR(100) | sim | Nome do cliente |
| email | VARCHAR(100) | sim | Usado no login |
| senha | VARCHAR(255) | sim | Salvar com bcrypt |
