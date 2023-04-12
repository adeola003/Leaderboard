// eslint-disable-next-line
let scoresList = [];
const userNameInput = document.getElementById('user-name');
const userScoreInput = document.getElementById('user-score');
const scoresElements = document.getElementById('scores-list');
const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('add-score');

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

// function to add new score
const add = (newName, newScore) => {
  const nex = new Score(newName, newScore);
  scoresList.push(nex);
  console.log(scoresList);
  updateStorage(scoresList);
};

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
