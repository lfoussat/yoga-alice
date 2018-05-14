import { createDetailedInspiration, createEditBtn, createEditInspiration } from './components/inspiration.js'
import { getInspirationById, sendUpdateInspiration, deleteInspiration } from './api.js'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

const sectionInfoInspiration = document.getElementById('inspiration')
const btnEditInspiration = document.getElementById('edit_inspiration_btn')
const sectionEditInspiration = document.getElementById('edit_inspiration')

const showInfoInspiration = inspiration => {
  sectionInfoInspiration.innerHTML = createDetailedInspiration(inspiration)
}
const showEditBtn = inspiration => {
  btnEditInspiration.innerHTML = createEditBtn(inspiration)
}
const showEditInspiration = inspiration => {
  sectionEditInspiration.innerHTML = createEditInspiration(inspiration)
}

const handleResponse = res => {
  if (res.status >= 400 && res.status < 600) {
    return res.json().then(err => { throw Error(err.code) })
  }

  return res.json()
}

sectionInfoInspiration.style.display = 'block'
btnEditInspiration.style.display = 'block'
sectionEditInspiration.style.display = 'none'

const start = async () => {
  await getInspirationById(id)
    .then(inspiration => {
      showInfoInspiration(inspiration)
      showEditBtn(inspiration)
      showEditInspiration(inspiration)
    })

  const editButton = document.getElementById('edit_btn')
  editButton.addEventListener('click', event => {
    event.preventDefault()

    sectionInfoInspiration.style.display = 'none'
    btnEditInspiration.style.display = 'none'
    sectionEditInspiration.style.display = 'block'
  })

  const deleteButton = document.getElementById('delete_btn')
  deleteButton.addEventListener('click', event => {
    event.preventDefault()

    const id = event.target.dataset.id
    console.log(id)

    deleteInspiration(id)
      .then(handleResponse)
      .then(() => {
        window.location = '/'
      })
  })


  const cancelButton = document.getElementById('cancel_btn')
  cancelButton.addEventListener('click', event => {
    event.preventDefault()

    getInspirationById(id)
      .then(inspiration => {
        sectionInfoInspiration.style.display = 'block'
        btnEditInspiration.style.display = 'block'
        sectionEditInspiration.style.display = 'none'
        start()
      })
  })

  const inspirationForm = document.getElementById('edit_inspiration_form')
  const messageElement = document.getElementById('error_message')
  const handleErrors = res => {
    messageElement.innerHTML = res.error || ''
  }

  inspirationForm.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(inspirationForm)

    sendUpdateInspiration(formData, id)
      .then(res => {
        if (res.error) {
          return handleErrors(res)
        }

        getInspirationById(id)
          .then(inspiration => {
            showInfoInspiration(inspiration)
            showEditBtn(inspiration)
            sectionInfoInspiration.style.display = 'block'
            btnEditInspiration.style.display = 'block'
            sectionEditInspiration.style.display = 'none'
            start()
          })
          .catch(err => console.log('error ' + err.message))
      })
  })

}

start()
