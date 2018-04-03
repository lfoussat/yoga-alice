const express = require('express')

const inspi1 = require(`../mocks/inspirations/inspiration1.json`)
// quand on va récup le json, il va être transformé en objet js normal par le require
const inspi2 = require(`../mocks/inspirations/inspiration2.json`)
const inspi3 = require(`../mocks/inspirations/inspiration3.json`)
// nb : si on se trompe ici le server ne se mlance pas correctement
const inspirations = [ inspi1, inspi2, inspi3 ]

console.log(inspi1)
console.log(inspi2.description)
console.log(inspirations)
// ici on a fait le lien entre nos fichiers et notre app node.js, ca retourne la donnée que j'ai récup
// but ensuite est de faire le lien entre mon app nodejs (cad ce que j'ai dans la mémoire de mon app nodejs)
// et ce que retourne express

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

app.get('/inspirations-yoga', (req, res) => {
  res.json(inspirations)
})

const server = app.listen(5000, () => console.log(`j'écoute sur le port 5000`))

// const http = require ('http')
//
// const server = http.createServer((req, res) => {
//   res.end(`OK`)
// })
//
// server.listen(5000, () => console.log('J\'écoute sur le port 5000 '))
