const sequelize = require('sequelize')
const instancia = require ('../../banco-de-dados')

const colunas = {
    empresa:{
        type:sequelize.STRING,
        allowNull:false
    },
    email:{
        type:sequelize.STRING,
        allowNull:false
    },
    categoria:{
        type:sequelize.ENUM('ração', 'brinquedos'),
        allowNull:false
    }
}
const opcoes = {
    freezeTableName : true,
    tablename:'fornecedores',
    timestamps:true,
    createdAt:'dataCriacao',
    updatedAt:'dataAtualizacao',
    version:'versao'
}
module.exports = instancia.define('fornecedor', colunas, opcoes)