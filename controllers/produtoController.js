const mongoose = require('mongoose')

const criaProduto = async (req, res) => {
    try {
        const produto = await Produto.create(req.body)
        res.send('produto cadastrado na base')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getAllProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find({})
        res.status(200).json({produtos})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const atualizaProduto = async (req, res) => {
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
}

const findProduto = async(req, res) => {
    const id = req.params.id
    try {
        const produto = await Produto.find({id})
        res.status(200).send(produto)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    criaProduto,
    getAllProdutos,
    findProduto,
    atualizaProduto
}