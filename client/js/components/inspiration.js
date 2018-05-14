export const createInspirationInsert = inspiration => `
  <div class="col-xs-12 col-sm-6 col-md-4 inspiration" style="background-color:${inspiration.color}">
    <h2>${inspiration.title}</h2>
    <!--<img class="thumbnailPic" src="http://localhost:5300/images/${inspiration.picture}"/>-->
    <p>${inspiration.smalldescription}</p>
    <a href='inspiration.html?id=${inspiration.id}'><i class="fas fa-arrow-right"></i></a>
  </div>
`

export const createDetailedInspiration = inspiration => `
  <h1>${inspiration.title}</h1>
  <h2>${inspiration.smalldescription}</h2>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-4 pPicture"><img src="http://localhost:5300/images/${inspiration.picture}"/></div>
    <div class="col-xs-12 col-sm-12 col-md-8 pText"><p>${inspiration.description}</p></div>
  </div>
`

export const createEditBtn = inspiration => `
  <button id="edit_btn"><i class="fas fa-pencil-alt"></i>Éditer</button>
  <!--<p id="edit_inspiration_btn">+</p>-->
  <button id="delete_btn" data-id='${inspiration.id}'><i class="fas fa-trash"></i>Supprimer</button>
`

export const createEditInspiration = inspiration => `
  <h1>Éditer l'inspiration</h1>
  <form id="edit_inspiration_form">
    <label for="inspiration_title">Titre :<br>
      <input type="text" id="inspiration_title" name="title" value="${inspiration.title}">
    </label><br>
    <label for="inspiration_small_description">Description courte :<br>
      <input type="text" id="inspiration_small_description" name="smalldescription" value="${inspiration.smalldescription}">
    </label><br>
    <label for="inspiration_description">Description :<br>
      <textarea type="text" id="inspiration_description" name="description" placeholder="">${inspiration.description}</textarea>
    </label><br>
    <label for="edit_inspiration_image">Image :<br>
      <img class="thumbnailPic" style ="width:50px; height:50px;" src="http://localhost:5300/images/${inspiration.picture}"/>
      <input id="edit_inspiration_image" type="file" name="picture"/>
    </label><br>
    <div id="error_message" style="color: red"></div><br>
    <input type="submit" id="edit_btn" value="Éditer"><br>
    <button id="cancel_btn">Annuler</button>
  </form>
`
