const roteador = require('express').Router()
const { request } = require('express')
const fornecedor = require('./fornecedor')
const fornecedor = require('./fornecedor')
const fornecedor = require('./fornecedor')
const fornecedor = require('./fornecedor')
const TabelaFornecedor = require ('./TabelaFornecedor')


roteador.get('/', async (requisao, resposta) =>{
    const resultados = await TabelaFornecedor.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})
roteador.post('/', async (requisao, resposta) => {
    try{
        const dadosrecebidos=requisao.body
    const fornecedor = new fornecedor(dadosrecebidos)
    await fornecedor.criar()
    resposta.send(
        JSON.stringify(fornecedor)
    )
    }catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )

    }
})
roteador.get('/:idFornecedor',async (requisao, resposta) =>{
    try{
        const id = requisao.params.idFornecedor
        const fornecedor = new fornecedor({id:id})
        await fornecedor.carregar()
        resposta.send(
            JSON.stringify(fornecedor)
        )
    } catch (erro){
        resposta.send(
            JSON.stringify({
                mensagem:erro.message
            })
        )

    }
  
})
roteador.put('/:idFornecedor', (requisao, resposta)=>{
    try{
        const id = requisao.params.idFornecedor
    const dadosrecebidos = requisao.body
    const dados = Object.assign({},dadosrecebidos,{id:id})
    const fornecedor = new fornecedor(dados)
    await fornecedor.atualizar()
    resposta.end()
    }catch (erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )

    }
})
roteador.delete('/:idFornecedor', (requisao,resposta)=>{
    try{
        const id = requisao.params.idFornecedor
        const fornecedor = new fornecedor ({id: id})
        await fornecedor.carregar()
        await fornecedor.remover()
        resposta.end()

    }catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })

        )
    }
})
module.exports = roteador