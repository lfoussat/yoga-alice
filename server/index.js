const express = require('express')

const db = require('./db-fs.js')

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
  db.getInspirations()
    .then(inspirations => res.json(inspirations))
    .catch(err => res.status(500).end(err.message))
})

app.listen(5300, () => console.log(`j'écoute sur le port 5300`))
