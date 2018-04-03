fetch('http://localhost:5300/inspirations-yoga')
  .then(res => res.json())
  .then(inspirations => {

    console.log(inspirations)
  })
