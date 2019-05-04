const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

//Esto es un Middleware
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'MicHEl benjamÍN'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
/* Esto es un servico o una funcion
 app.get('/', function(req, res) {
res.send('Hello Benjazz');
 let salida = {
 nombre: 'fernando',
 edad: 32,
 url: req.url
 }

 res.send(salida);
 }); */


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}...`);
});