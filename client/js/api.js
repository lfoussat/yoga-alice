/* global fetch */

export const getAllInspirations = () => {
  return fetch('http://localhost:5300/inspirations-yoga')
    .then(res => res.json())
}
