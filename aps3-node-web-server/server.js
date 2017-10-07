// Carrega Express
const express = require('express');

// Cria um novo app Express
var app = express();

// Registra um handler para a request HTTP
app.get('/', (req, res) => {
    res.send('Olá Express')
});

// Conecta a aplicação em uma porta da máquina
app.listen(3000);


