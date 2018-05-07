export const createInspirationInsert = inspiration => `
  <div class="inspiration">
    <h2>${inspiration.title}</h2>
    <img class="thumbnailPic" src="${inspiration.picture}"/>
    <p>${inspiration.description}</p>
  </div>
`
