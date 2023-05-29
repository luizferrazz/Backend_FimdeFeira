const port = 4004;

const express = require('express')
const bancoDeDados = require('../bancoDeDados')
const Cliente = require('../cliente')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/clientes', (req, res) => {
    res.send(bancoDeDados.getClientes())
})

app.get('/clientes/:id', (req, res) => {
    res.send(bancoDeDados.getCliente(req.params.id))
})

app.post('/clientes', (req, res) => {
    const novoCliente = bancoDeDados.cadastrarCliente({
        nome: req.body.nome,
        telefone: req.body.telefone
    })
    res.send(novoCliente) //JSON
})

app.put('/clientes/:id', (req, res) => {
    const atualizarDados = bancoDeDados.cadastrarCliente({
        id: req.params.id,
        nome: req.body.nome,
        telefone: req.body.telefone
    })
    res.send(atualizarDados)
})

app.delete('/clientes/:id', (req, res) => {
    const deletandoCliente = req.params.id
    res.send(bancoDeDados.deleteCliente(deletandoCliente))
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})