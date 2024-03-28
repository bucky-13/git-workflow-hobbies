const app = document.querySelector('#app');

export function renderAboutSection() {
  app.innerHTML = '';
  let h2 = document.createElement('h2');
  h2.textContent = 'About this page';

  let p = document.createElement('p');
  p.textContent =
    'When recording the commit, append a line that says "(cherry picked from commit …​)" to the original commit message in order to indicate which commit this change was cherry-picked from. This is done only for cherry picks without conflicts. Do not use this option if you are cherry-picking from your private branch because the information is useless to the recipient. If on the other hand you are cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch for an older release from a development branch), adding this information can be useful.';
  app.append(h2, p);
}
