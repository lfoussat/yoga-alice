import { createInspirationInsert } from './components/inspiration.js'
import { getAllInspirations, sendInspiration } from './api.js'

const inspirationsElement = document.getElementById('inspirations')
const addInspirationBloc = document.getElementById('add_inspiration_bloc')
const addInspirationForm = document.getElementById('add_inspiration_form')
const addInspirationBtn = document.getElementById('add_inspiration_btn')
const cancelBtn = document.getElementById('cancel')
const messageElement = document.getElementById('error_message')

const handleErrors = res => {
  messageElement.innerHTML = res.error || ''
}

const showInspirations = inspirations => {
  inspirationsElement.innerHTML = inspirations
    .map(inspiration => createInspirationInsert(inspiration))
    .join('')
}

const start = async () => {
  addInspirationBloc.style.display = "block"
  addInspirationForm.style.display = "none"

  await getAllInspirations()
    .then(inspirations => inspirations.sort((a, b) => b.createdAt - a.createdAt))
    .then(showInspirations)
  }

addInspirationBloc.addEventListener('click', event => {
  event.preventDefault()

  addInspirationBloc.style.display = "none"
  addInspirationForm.style.display = "block"

  cancelBtn.addEventListener('click', event => {
    event.preventDefault()

    addInspirationBloc.style.display = "block"
    addInspirationForm.style.display = "none"
  })

  addInspirationForm.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(addInspirationForm)

    sendInspiration(formData)
      .then(res => {
        if (res.error) {
          return handleErrors(res)
        }

      start()
    })
  })
})

start()
