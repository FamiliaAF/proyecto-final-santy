const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');
const mediaQuery = window.matchMedia('(min-width: 968px)');
const imgHero = document.getElementById('img-hero');


btnMenu.addEventListener('click', () => {
  nav.classList.toggle('hidden');
})

function handleMediaQuerie(event) {
  if (event.matches) {
    nav.classList.remove('hidden');
  }
}

mediaQuery.addEventListener('change', handleMediaQuerie);
handleMediaQuerie(mediaQuery)

const heros = ['hero.svg','hero02.webp','hero03.webp','hero04.webp'];

const index = Math.floor(Math.random() * heros.length)

imgHero.src = `./images/${heros[index]}`