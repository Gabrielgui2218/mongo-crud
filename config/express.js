const express = require('express');
const mongoose = require('mongoose')
const app = express();

const produtoController = require('./controllers/produtoController')

const Produto = require('./models/produtoModel')

app.use(express.json())

app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000');
})
