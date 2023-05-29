const input = require('readline-sync')

class Usuario{
    constructor (email, telefone, uf, cidade, bairro, logradouro, numero, complemento){
        this._email = email
        this._telefone = telefone
        this._endereco = {
            uf,
            cidade,
            bairro,
            logradouro,
            numero,
            complemento
        }
    }
    get email(){
        return this._email
    }

    set email (novoEmail){
        // TODO: validação
        this._email = novoEmail
        return novoEmail
    }

    get telefone(){
        return this._telefone
    }

    set telefone(novoTelefone){
        // TODO: validação
        this._telefone = novoTelefone
        return novoTelefone
    }

    get endereco(){
        return this._endereco
    }

    set endereco(novoEndereco){
        // TODO: validação
        this._endereco = novoEndereco
        return novoEndereco
    }
}

class Cliente extends Usuario{
    constructor(telefone, uf, cidade, bairro, logradouro, numero, 
        complemento, cpf, nome, sobrenome, sexo){
            super(email, telefone, uf, cidade, bairro, logradouro, numero, complemento)
            this._cpf = cpf
            this._nome = nome,
            this._sobrenome = sobrenome,
            this._sexo = sexo
    }
    get cpf(){
        return this._cpf
    }

    set cpf(novoCpf){
        // TODO: validação
        return this._cpf = novoCpf
    }

    get nome(){
        return this._nome
    }

    set nome(novoNome){
        return this._nome = novoNome
    }

    get sobrenome(){
        return this._sobrenome
    }

    set sobrenome(novoSobrenome){
        return this._sobrenome = novoSobrenome
    }

    get sexo(){
        return this._sexo
    }

    set sexo(novoSexo){
        return this._sexo = novoSexo
    }

    
}

module.exports = { Usuario, Cliente }