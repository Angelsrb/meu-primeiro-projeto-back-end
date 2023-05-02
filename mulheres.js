const express = require('express') //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota

const app = express() //aqui estou iniciando o app
app.use(express.json())
const porta = 3333 //aqui estou criando a porta

//aqui estou criando lista inicial de mulheres
const mulheres = [
  {
    id: '1',
    nome: 'Simara Conceição',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora e instrutora'
  },
  {
    id: '2',
    nome: 'Iana Chan',
    imagem: '',
    minibio: 'Fundadora do Programaria'
  },
  {
    id: '3',
    nome: 'Nina da Hora',
    imagem: '',
    minibio: 'Hack Antiracista'
  }
]

//GET
function mostraMulheres(request, response) {
  response.json(mulheres)
}

//POST
function criaMulher(request, response) {
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio
  }

  mulheres.push(novaMulher)

  response.json(mulheres)
}

//PORTA
function mostraPorta() {
  console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET / mulheres
app.use(router.post('/mulheres', criaMulher)) //configurei rota POST / mulheres
app.listen(porta, mostraPorta) //servidor ouvindo a porta
