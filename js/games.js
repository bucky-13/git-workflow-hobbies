const gamesContainer = document.querySelector('#gamesContainer');

export function displayGames() {
  let gamesSection = `<ul>
  <li>Elder Scrolls Online</li>
  <li>Baldur's Gate 3</li>
  <li>Valheim</li>
  </ul>`;
  gamesContainer.append(gamesSection);
}
