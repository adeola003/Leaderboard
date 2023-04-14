// eslint-disable-next-line
const userNameInput = document.getElementById('user-name');
const userScoreInput = document.getElementById('user-score');
const scoresElements = document.getElementById('scores-list');
const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('add-score');
const form = document.getElementById('form');
const deolaId = 'anMeraym05fhThGgs8ur';
const apiURL= 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

// class to build scores object with methods to add or remove them from the table
class Score {
  constructor(name, score) {
    this.user = name;
    this.score = score;
  }
};


//refactored funtion to send ne scores to the API
const add = async (newName, newscore) => {
  const newScore = new Score(newName, newscore);
  const completeURL =  `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${deolaId}/scores`;
  const response = await fetch(completeURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });
  const data = await response.json();
  return data.result;
};

//function to get the stored data from the API
const getData = async () => {
  const completeURL =  `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${deolaId}/scores`;
  const response = await fetch(completeURL);
  const data = await response.json();
  const scores = data.result.sort((a, b) => b.score - a.score);
  return scores;
};


// function to display scores
const display = async () => {
  scoresElements.innerHTML = '';
  const scoresList = await getData();
  console.log(scoresList)
  scoresList.forEach((item) => {
    const scoreLine = document.createElement('li');
    scoreLine.classList.add('scoreLi');
    scoreLine.innerHTML = `<li>${item.user}: ${item.score}</li>`;
    scoresElements.appendChild(scoreLine);
  });
};

export {
  userNameInput, userScoreInput,
   refreshBtn, submitBtn,
   add, display,
   form
};


