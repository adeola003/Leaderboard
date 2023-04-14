import './style.css';

import {
  scoresList,
  userNameInput,
  userScoreInput,
  refreshBtn,
  submitBtn,
  loadFromStorage,
  updateStorage,
  add,
  display,
  form
} from './functions.js';



// event listener to add new scores
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('#name');
  const scoreInput = document.querySelector('#score');
  const newName = userNameInput.value;
  const newscore = userScoreInput.value;
  await add(newName, newscore);
  userNameInput.value = '';
  userScoreInput.value = '';
  await display();
});

const reloadWindow = () => {
  location.reload();
};


// Event listenner to refresh the scores
refreshBtn.addEventListener('click', () => {
  reloadWindow
  display();
});



