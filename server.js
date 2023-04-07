const express = require('express');
const mongoose = require('mongoose')
const app = express();

const Produto = require('./models/produtoModel')

app.use(express.json())

app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000');
})

app.post('/produto', async(req, res) => {
    try{
        const produto = await Produto.create(req.body)
        res.send('produto cadastrado na base')
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/produtos', async(req, res) => {
    try {
        const produtos = await Produto.find({})
        res.status(200).json({produtos})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

app.get('/produtos/:id', async(req, res) => {
    const id = req.params.id
    try {
        const produto = await Produto.find({id})
        res.status(200).send(produto)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.put('/produtos/:id', async(req, res) =>{
    const id = req.params.id
    try{
        const produto = await Produto.findByIdAndUpdate(id, req.body)
        if(!produto){
            return res.status(404).send('Não conseguimos encontrar produto com esse id')

        }

        res.status(200).send(`produto com o id ${id}, atualizado com sucesso`)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://Test:tjFNcUzy81pGx38w@cluster0.zo0u04a.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to mongoDB;');
}).catch((err) => {
    console.log(err);
})