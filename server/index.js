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
  res.json(inspirations)
})

app.listen(5300, () => console.log(`j'écoute sur le port 5300`))
