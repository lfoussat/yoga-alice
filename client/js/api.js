/* global fetch */

const postJson = (url, content) => fetch(url, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  // credentials: 'include',
  body: JSON.stringify(content)
})

export const getAllInspirations = () => {
  return fetch('http://localhost:5300/inspirations-yoga')
    .then(res => res.json())
}

export const sendInspiration = formData => {
  return fetch('http://localhost:5300/add-inspiration', {
    method: 'post',
    // 'credentials': 'include',
    body: formData
  })
    .then(res => res.json())
}

export const getInspirationById = id => {
  return fetch(`http://localhost:5300/inspirations-yoga/${id}`)
    .then(res => res.json())
}

export const sendUpdateInspiration = (formData, id) => {
  return fetch(`http://localhost:5300/update-inspiration/${id}`, {
    method: 'post',
    // 'credentials': 'include',
    body: formData
  })
    .then(res => res.json())
}

export const deleteInspiration = id => {
  return fetch(`http://localhost:5300/inspirations-yoga/${id}`, { method: 'delete' })
}
