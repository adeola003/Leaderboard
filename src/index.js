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
} from './functions.js';

// load tasks from the storage
loadFromStorage();

// event listener to add new scores
submitBtn.addEventListener('click', () => {
  const newName = userNameInput.value;
  const newScore = userScoreInput.value;
  if (newName !== '' && newScore !== '') {
    add(newName, newScore);
    console.log(scoresList);
  }
});

// display the tasks list
display();

// Event listenner to refresh the scores
refreshBtn.addEventListener('click', () => {
  const len = scoresList.length;
  scoresList.splice(0, len);
  updateStorage(scoresList);
  console.log(scoresList);
  display();
});
