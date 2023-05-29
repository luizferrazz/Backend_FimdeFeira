const listaClientes = {
    _id: 1,
    get id(){return this._id++}
}

const clientes = {}
let nextId = 1
function getNextId(){
    return nextId++
}
function cadastrarCliente(cliente){
    const id = getNextId()
    cliente.id = id
    clientes[id] = cliente
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