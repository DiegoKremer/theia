// Carrega Express
const express = require('express');

// Cria um novo app Express
var app = express();

// Configura caminho no servidor
app.use(express.static(__dirname + '/public'));

// Cria um handler para a request HTTP
app.get('/', (req, res) => {
    //res.send('<h1>Olá Express</h1>')
    res.send({
        name: 'Diego',
        likes: [
            'Technology',
            'Travel'
        ]
    });
});

// Cria um handler para página Sobre
app.get('/sobre', (req, res) => {
    res.send('Página Sobre')
});

// Cria um handler para página de erro com JSON
app.get('/erro', (req, res) => {
    res.send({
        errorMessage:'Erro ao processar sua requisição.'
    });
});


// Conecta a aplicação em uma porta da máquina
app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000');
});


