export function displayGamesList() {
  const gamesContainer = document.querySelector('#gamesContainer');

  let gamesList = document.createElement('ul');
  gamesList.innerHTML = `
  <li>Elder Scrolls Online</li>
  <li>Baldur's Gate 3</li>
  <li>Valheim</li>
  `;

  gamesContainer.append(gamesList);
}
