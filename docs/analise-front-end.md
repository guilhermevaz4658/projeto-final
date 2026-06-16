# Análise do Front-end

## Projeto Saúde e Treino

Aplicativo de exercícios físicos caseiros ou na academia

## Integrantes

- Elem Cardoso
- Joel Rodrigues
- Guilherme Vaz
- Jéssica Nunes

## Telas existentes

| Tela | Arquivo ou rota | O que aparece nela? | O que o usuário pode fazer? |
|---|---|---|---|
| Página inicial | index.html - LandingPage.jsx | Logo e conceito do app, serviços, feedbacks, botão para tela de login/cadastro | Ver informações gerais |
| Página de login | Login.jsx | Formulário para o usuário realizar login | Logar no sistema e ter permanência de seção com token |
| Página de cadastro | Cadastro.jsx | Formulário para realizar o cadastro do usuário | Se cadastrar no sistema |
| Página home logado | Home.jsx | Serviços e treinos personalizados para diferentes categorias | Conferir o progresso de evolução geral e mudar entre abas de treinos em casa/academia, corrida |

## Formulários existentes

| Tela | Campos do formulário | O que deve acontecer ao enviar? |
|---|---|---|
| Login | email, senha | Validar usuário e gerar token |
| Cadastro | nome, email, senha | Cadastrar usuário no banco de dados com senha criptografada |

## Listas, cards ou tabelas existentes

| Tela | Dados exibidos | Esses dados virão do banco? |
|---|---|---|
| Página inicial | Propagando do applicativo/feedbacks | Não |
| Página de Login | Formulário de login | Sim |
| Página cadastro | Formulário de cadastro | Sim |
| Página home logado | Seções de treino e progresso geral | Não |

## Botões importantes

| Tela | Botão | Ação esperada |
|---|---|---|
| Página inicial | Logar | Navegar até a página de Login |
| Login | Entrar | Fazer POST /api/login |
| Cadastro | Registrar | Fazer POST /api/cadastro |