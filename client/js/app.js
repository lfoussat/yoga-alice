fetch('http://localhost:5300/inspirations-yoga')
  .then(res => res.json())
  .then(inspirations => {
    const inspirationsElement = document.getElementById('inspirations')
    inspirationsElement.innerHTML = JSON.stringify(inspirations)

    console.log(inspirations)
  })
