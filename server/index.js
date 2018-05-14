const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const db = require('./db-fs.js')

const app = express()

// MIDDLEWARES

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// multer set up
const uploadDir = path.join(__dirname, 'public/images')

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => { // accepts only images
    const ext = path.extname(file.originalname).toLowerCase()
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      req.fileValidationError = 'Invalid file type'
      return cb(new Error('Invalid file type'), false)
    }
    cb(null, true)
  },
  limits: { // limited at 5 Mo
    fileSize: 5000000
  }
}).single('picture')

// images - authorize Access
app.use('/images', express.static(uploadDir)) // module to access images
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
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
