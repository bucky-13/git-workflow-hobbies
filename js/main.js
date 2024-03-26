import './style.css';
import { displayGamesList } from '../counter.js';

document.querySelector('#app').innerHTML = `
  <div class="gamesContainer">
    <h2>List of Games</h2>
  </div>
`;

displayGamesList();
