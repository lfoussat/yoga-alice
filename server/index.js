const express = require('express')

const inspi1 = require(`../mocks/inspirations/inspiration1.json`)
const inspi2 = require(`../mocks/inspirations/inspiration2.json`)
const inspi3 = require(`../mocks/inspirations/inspiration3.json`)
const inspirations = [ inspi1, inspi2, inspi3 ]

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res) => {
  res.send('OK')
})

app.get('/inspirations-yoga', (req, res) => {
  res.json(inspirations)
})

const server = app.listen(5300, () => console.log(`j'écoute sur le port 5300`))
