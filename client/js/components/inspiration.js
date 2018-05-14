export const createInspirationInsert = inspiration => `
  <div class="col-xs-12 col-sm-6 col-md-4 inspiration" style="background-color:${inspiration.color}">
    <h2>${inspiration.title}</h2>
    <!--<img class="thumbnailPic" src="http://localhost:5300/images/${inspiration.picture}"/>-->
    <p>${inspiration.smalldescription}</p>
    <a href='inspiration.html?id=${inspiration.id}'><i class="fas fa-arrow-right"></i></a>
  </div>
`
