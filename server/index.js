const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db-fs.js')

const app = express()

// MIDDLEWARES

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res) => {
  res.send('OK')
})

app.get('/inspirations-yoga', (req, res) => {
  db.getInspirations()
    .then(inspirations => res.json(inspirations))
    .catch(err => res.status(500).end(err.message))
})

app.get('/inspirations-yoga/:id', async (req, res) => {
  const inspirations = await db.getInspirations()
  const id = Number(req.params.id)
  const inspiration = inspirations.find(inspiration => inspiration.id === id)

  res.json(inspiration)
})

app.listen(5300, () => console.log(`j'écoute sur le port 5300`))
