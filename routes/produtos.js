const produtoController = require('../controllers/produtoController') 

module.exports = (app) => {
    app.post('/produto', produtoController.criaProduto)

    app.get('/produtos', produtoController.getAllProdutos)

    app.get('/produtos/:id', produtoController.findProduto) 

    app.put('/produtos/:id', produtoController.atualizaProduto)
}
