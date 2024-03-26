export function displayGamesList() {
  const gamesContainer = document.querySelector('#gamesContainer');

  let gamesList = document.createElement('ul');
  gamesList.classList.add('gamesList');
  gamesList.innerHTML = `
  <li>Elder Scrolls Online</li>
  <li>Baldur's Gate 3</li>
  <li>Timberborn</li>
  <li>For The King II</li>
  <li>Valheim</li>
  <li>Civilization VI</li>
  `;

  gamesContainer.append(gamesList);
}
