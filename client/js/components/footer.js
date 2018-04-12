// html injection
const createFooter = () => `
<div id="yogaAliceFooter">
    <div id="socialMedia">
      <a href="https://www.facebook.com/alice.yoga.shiatsu/"><img src="" alt"Facebook Yoga Alice"></a>
      <a href="contact.html">Contact</a>
    </div>
    <div id="footerLinks">
      <a href="mentions-legales.html">Mentions légales</a>
      <a href="plan-du-site.html">Plan du site</a>
    </div>
    <div id="coyright">
      <p>Copyright 2018 : Alice Olagnon</p>
    </div>
</div>
`

const footerElement = document.getElementById('footer')
footerElement.innerHTML = createFooter()
