const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000');
})

mongoose.connect('mongodb+srv://Test:tjFNcUzy81pGx38w@cluster0.zo0u04a.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to mongoDB;');
}).catch((err) => {
    console.log(err);
})