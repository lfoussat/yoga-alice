/* global fetch */
import { getAllInspirations } from './api.js'

import { showInspiration } from './components/inspiration.js'

fetch('http://localhost:5300/inspirations-yoga')
  .then(res => res.json())
  .then(inspirations => {
    const inspirationsElement = document.getElementById('inspirations')
    inspirationsElement.innerHTML = inspirations.map(showInspiration).join('')
    // JSON.stringify(inspirations)
    console.log(inspirations)
  })
