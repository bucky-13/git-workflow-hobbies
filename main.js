import './style.css';
import { displayGamesList } from './js/games.js';

const displayGamesSection = document.querySelector('#displayGamesSection');
const displayAboutSection = document.querySelector('#displayAboutSection');

document.querySelector('#app').innerHTML = `
  <div class="gamesContainer" id="gamesContainer">
    <h2>List of Games</h2>
  </div>
`;

displayAboutSection.addEventListener('click', () => {
  renderAboutSection();
});
displayGamesSection.addEventListener('click', () => {
  displayGamesList();
});

displayGamesList();
