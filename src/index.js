import './style.css';

import {
  userNameInput,
  userScoreInput,
  refreshBtn,
  add,
  display,
  form,
} from './functions.js';

// event listener to add new scores
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const newName = userNameInput.value;
  const newscore = userScoreInput.value;
  await add(newName, newscore);
  userNameInput.value = '';
  userScoreInput.value = '';
});

// Event listenner to refresh the scores
refreshBtn.addEventListener('click', () => {
  display();
});
