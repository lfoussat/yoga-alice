// html injection
const createHeader = () => `<div id="yogaAliceNavbar">
    <div id="yogaAliceLogo">
        <a href="index.html">Yoga Alice</a>
    </div>
    <div id="mainNav">
        <a href="index.html">ACCUEIL</a>
        <a href="">YOGA ALICE</a>
        <a href="">COURS</a>
        <a href="">STAGES</a>
        <a href="">SHIATSU</a>
        <a href="">INSPIRATIONS</a>
        <a href="contact.html">CONTACT</a>
    </div>
    <div id="burgerBtn">
        <a href="#" title="Burger button" id="openNavBtn">&#9776;</span>
    </div>
    <div id="burgerNav" class="overlay">
        <a href="javascript:void(0)" id="closeNavBtn">&times;</a>
        <div class="overlay-content">
            <a href="index.html">ACCUEIL</a>
            <a href="">YOGA ALICE</a>
            <a href="">COURS</a>
            <a href="">STAGES</a>
            <a href="">SHIATSU</a>
            <a href="">INSPIRATIONS</a>
            <a href="contact.html">CONTACT</a>
        </div>
    </div>
</div>`

const headerElement = document.getElementById('header')
headerElement.innerHTML = createHeader()

// Navigation
const openNav = () => {
  document.getElementById('burgerNav').style.width = '100%'
}
const closeNav = () => {
  document.getElementById('burgerNav').style.width = '0%'
}

const openNavElement = document.getElementById('openNavBtn')
openNavElement.addEventListener('click', openNav)

const closeNavElement = document.getElementById('closeNavBtn')
closeNavElement.addEventListener('click', closeNav)
