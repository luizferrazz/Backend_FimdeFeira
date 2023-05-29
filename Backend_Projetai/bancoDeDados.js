const listaClientes = {
    _id: 1,
    get id(){return this._id++}
}

const clientes = {}

function cadastrarCliente(cliente){
    if(!cliente.id) cliente.id = listaClientes.id
    clientes[cliente.id] = cliente
    return cliente
}

function getCliente(id){
    return clientes[id] || {}
}

function getClientes(){
    return Object.values(clientes)
}

function deleteCliente(id){
    if(clientes[id]){
        delete clientes[id]
        return `Cliente deletado com sucesso!`
    }
    else{
        return `Cliente nao foi deletado...`
    }
}

module.exports = {cadastrarCliente, getCliente, getClientes, deleteCliente}