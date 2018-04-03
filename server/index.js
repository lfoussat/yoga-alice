const express = require('express')

// pour créer le serveur, on appelle express, juste.
// Ca nous retourne un server, tout simplement,
// mais en langage express on appelle ca l'app
// Mais l'application c'est notre serveur
const app = express()

app.get('/', (req, res) => {
  res.send('OK')

})

const server = app.listen(5000, () => console.log(`j'écoute sur le port 5000`))

// const http = require ('http')
//
// const server = http.createServer((req, res) => {
//   res.end(`OK`)
// })
//
// server.listen(5000, () => console.log('J\'écoute sur le port 5000 '))
