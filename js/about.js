const app = document.querySelector('#app');

export function renderAboutSection() {
  app.innerHTML = '';
  let h2 = document.createElement('h2');
  h2.textContent = 'About this page';

  app.append(h2);
}
