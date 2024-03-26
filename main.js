import './style.css';
import { displayGamesList } from './js/games.js';

document.querySelector('#app').innerHTML = `
  <div class="gamesContainer" id="gamesContainer">
    <h2>List of Games</h2>
  </div>
`;

displayGamesList();
