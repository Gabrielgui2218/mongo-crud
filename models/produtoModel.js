const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: [true, "Por favor insira o ID"]
        },
        name:{
            type: String,
            require: [true, "Por favor insira o nome"]
        },
        preco: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Produto = mongoose.model('Produto', produtoSchema)

module.exports = Produto