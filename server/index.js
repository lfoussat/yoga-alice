const express = require('express')

const inspi1 = require(`../mocks/inspirations/inspiration1.json`)
const inspi2 = require(`../mocks/inspirations/inspiration2.json`)
// nb : si on se trompe ici le server ne se mlance pas correctement
const inspi = [inspi1, inspi2]

// pour créer le serveur, on appelle express, juste.
// Ca nous retourne un server, tout simplement,
// mais en langage express on appelle ca l'app
// Mais l'application c'est notre serveur
const app = express()

// on définit une route, sinon express ne sait pas quoi faire
// pour faire ca -> on GET une route, puis on lui passe une callback
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
