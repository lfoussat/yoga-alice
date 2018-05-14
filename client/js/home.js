import { createInspirationInsert } from './components/inspiration.js'
import { getAllInspirations } from './api.js'

let myIndex = 0
const inspirationsElement = document.getElementById('inspirations')

const show3Inspirations = async () => {
  const inspirations = await getAllInspirations()
  inspirationsElement.innerHTML = inspirations
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 3)
    .map(inspiration => createInspirationInsert(inspiration))
    .join('')
}

const carousel = () => {
    let i = 0
    let x = document.getElementsByClassName("mySlides")
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none"
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 9000);
}

// start
carousel()
show3Inspirations()
