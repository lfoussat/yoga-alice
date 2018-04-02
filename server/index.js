const http = require ('http')

const server = http.createServer((req, res) => {
  res.end(`OK`)
})

server.listen(5000, () => console.log('J\'écoute sur le port 5000 '))
