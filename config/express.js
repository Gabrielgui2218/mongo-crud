const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');


var port = process.env.NODE_PORT_DEV || 8081;

console.log("*** Servidor iniciando na porta: ", port);

var app = express();

var allowCorsDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.use('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
app.use(allowCorsDomain);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(function (error, req, res, next) {
    if (error) {
        res.status(400);
        res.send(new MensagemDTO(1, 99, 1, "Json com formato inválido!"));
    } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    }
});

function start() {

    load('routes', { cwd: 'app' }).into(app);

    app.listen(port, function () {
        console.log("*** Servidor iniciado na porta: ", port);
    });

    app.use(function (req, res) {
        console.error(`Erro na requisição - URL: ${req.protocol}://${req.get('host') + req.originalUrl}`)
        res.status(404);
    });
}

module.exports = () => {
    start()
};
