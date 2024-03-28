import './style.css';
import { displayGamesList } from './js/games.js';
import { renderAboutSection } from './js/about.js';

const displayGamesSection = document.querySelector('#displayGamesSection');
const displayAboutSection = document.querySelector('#displayAboutSection');
const app = document.querySelector('#app');

function init() {
  app.innerHTML = '';
  app.innerHTML = `
  <div class="gamesContainer" id="gamesContainer">
    <h2>List of Games</h2>
  </div>
`;
  displayGamesList();
}

displayAboutSection.addEventListener('click', () => {
  renderAboutSection();
});
displayGamesSection.addEventListener('click', () => {
  init();
});

init();
