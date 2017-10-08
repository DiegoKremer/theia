// Carrega Express
const express = require('express');
// Carrega Handlebars para templates
const hbs = require('hbs');

// Cria um novo app Express
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
// Configura caminho no servidor
app.use(express.static(__dirname + '/public'));

// Retorna o ano atual
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

// Retorna texto em maiusculas
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

// Cria um handler para a request HTTP
app.get('/', (req, res) => {
    res.render('principal.hbs', {
        welcomeMessage: 'Bem vindo à Página Principal',
        pageTitle: 'Pagina Principal',
    })
});

// Cria um handler para página Sobre
app.get('/sobre', (req, res) => {
    res.render('sobre.hbs', {
        pageTitle: 'Pagina Sobre',
    });
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


