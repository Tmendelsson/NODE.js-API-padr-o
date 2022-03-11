const modelo = require('./ModeloTabelaFornecedores')

module.exports = {
    listar(){
        return modelo.findAll()
    },
    inserir(fornecedor){
        return modelo.create(fornecedor)

    },
    async PegarPorId (id){
        const encontrado = await modelo.findOne({
            where:{
                id:id

            }
        })
        if(!encontrado){
            throw new Error('Fornecedor não encontrado')
        }
        return encontrado
    },
    atualizar(id,dadosParaAtualizar){
        return modelo.update(
            dadosParaAtualizar,
            {
                where: {id: id}
            }
        )

    },
    remover(id){
        return modelo.destroy({
            where: {id: id}
        })
    }
}