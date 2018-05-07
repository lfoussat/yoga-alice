import { createInspirationInsert } from './components/inspiration.js'
import { getAllInspirations } from './api.js'

const inspirationsElement = document.getElementById(`inspirations`)

const showInspirations = inspirations => {
  inspirationsElement.innerHTML = inspirations
    .map(inspiration => createInspirationInsert(inspiration))
    .join('')
}

getAllInspirations()
  .then(showInspirations)
