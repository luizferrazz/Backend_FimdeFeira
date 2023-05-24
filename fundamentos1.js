const input = require('readline-sync')

class Usuario{
    constructor (telefone, uf, cidade, bairro, logradouro, numero, complemento){
        this.telefone = telefone
        this.endereco = {
            uf,
            cidade,
            bairro,
            logradouro,
            numero,
            complemento
        }
    }
    cadastrarTelefone(){
        this.telefone = input.question("Insira o telefone para contato: ")
        return console.log(`Telefone cadastrado com sucesso!`)
    }

    cadastrarEndereco(){
        this.endereco.uf = input.question("UF: ")
        this.endereco.cidade = input.question("Cidade: ")
        this.endereco.bairro = input.question("Bairro: ")
        this.endereco.logradouro = input.question("Logradouro: ")
        this.endereco.numero = input.question("Numero: ")
        this.endereco.complemento = input.question("Complemento: ")
        return console.log("Endereco cadastrado com sucesso!")
    }
}

class Cliente extends Usuario{
    constructor(telefone, uf, cidade, bairro, logradouro, numero, 
        complemento, cpf, nome, sobrenome, sexo, email){
            super(telefone, uf, cidade, bairro, logradouro, numero, complemento)
            this.cpf = cpf
            this.nomeCompleto = {
                nome,
                sobrenome
            }
            this.sexo = sexo
            this.email = email
    }
    cadastrarCliente(){
        this.cpf = input.question("Insira o seu CPF: ")
        this.nomeCompleto.nome = input.question("Primeiro nome: ")
        this.nomeCompleto.sobrenome = input.question("Sobrenome: ")
        this.sexo = input.question("Genero: ")
        this.email = input.question("Email: ")
        return console.log(`Bem-vindo ao nosso app, ${this.nomeCompleto.nome} ${this.nomeCompleto.sobrenome}! Seu cadastro foi realizado com sucesso!`)
    }
}

const cliente = new Cliente()
cliente.cadastrarTelefone()
cliente.cadastrarEndereco()
cliente.cadastrarCliente()
console.log(cliente)