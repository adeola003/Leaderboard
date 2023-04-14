// eslint-disable-next-line
const userNameInput = document.getElementById('user-name').value;
const userScoreInput = document.getElementById('user-score').value;
const scoresElements = document.getElementById('scores-list');
const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('add-score');
const form = document.getElementById('form');
const deolaId = 'anMeraym05fhThGgs8ur';
const apiURL= 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

// class to build scores object with methods to add or remove them from the table
class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
};


//refactored funtion to send ne scores to the API
const add = (newName, newScore) => {
  const newScore = new Score(newName, newScore);
  const completeURL =  `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${deolaId}/scores`;
  fetch(completeURL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(newScore)
  })

  .then((result) => result.json())
  .then(() => {console.log('Leaderboard score created correctly'); })
  .catch((error) => console.error(error));
};

//function to get the stored data from the API
const getData = async () => {
  const response = await fetch(`${apiURL}/games/${deolaId}/scores/`);
  const data = await response.json();
  const scores = data.result.sort((a, b) => b.score - a.score);
  return scores;
};


// function to display scores
const display = () => {
  scoresElements.innerHTML = '';
  const scoresList = getData();
  scoresList.forEach((item) => {
    const scoreLine = document.createElement('li');
    scoreLine.classList.add('scoreLi');
    scoreLine.innerHTML = `<li>${item.name}: ${item.score}</li>`;
    scoresElements.appendChild(scoreLine);
  });
};

export {
  scoresList, userNameInput, userScoreInput,
   refreshBtn, submitBtn,
   add, display,
};
