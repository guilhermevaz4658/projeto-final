const app = require('./src/app');

// alteração para deploy no render
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
