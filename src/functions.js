// eslint-disable-next-line
let scoresList = [];
const userNameInput = document.getElementById('user-name').value;
const userScoreInput = document.getElementById('user-score').value;
const scoresElements = document.getElementById('scores-list');
const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('add-score');
const form = document.getElementById('form');
const deolaId = 'anMeraym05fhThGgs8ur';
const apiURL= 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

//refactored funtion to send ne scores to the api
// function to add new score
const add = (newName, newScore) => {
  const newScore = new Score(newName, newScore);
  fetch(apiURL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(newScore)
  })

  .then((result) => result.json())
  .then(() => {console.log('Leaderboard score created correctly'); })
  .catch((error) => console.error(error));
};










// add to local storage
const updateStorage = (data) => {
  localStorage.setItem('score-list', JSON.stringify(data));
};

// class to build scores object with methods to add or remove them from the table
class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}



// function to display scores
const display = () => {
  scoresElements.innerHTML = '';
  scoresList.forEach((item) => {
    const scoreLine = document.createElement('li');
    scoreLine.classList.add('scoreLi');
    scoreLine.innerHTML = `<li>${item.name}: ${item.score}</li>`;
    scoresElements.appendChild(scoreLine);
  });
};

// load from storage
const loadFromStorage = () => {
  const storedScores = localStorage.getItem('score-list');
  if (storedScores) {
    scoresList = JSON.parse(storedScores);
    display();
  }
};

export {
  scoresList, userNameInput, userScoreInput, refreshBtn, submitBtn,
  loadFromStorage, updateStorage, add, display,
};
