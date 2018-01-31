'use strict';

var scoresTable = document.getElementById('scoreTable');
var trEl = document.createElement('tr');
var tdEl = document.createElement('td');

High.users = [];

function High (userName, level, scored) {
  this.userName = userName;
  this.level = level;
  this.scored = scored;
  High.users.push(this);
}


function createTable() {
  if(High.users.length > 5) {
    High.users.length === 5;
  }
  trEl = document.createElement('tr');
  tdEl = document.createElement('td');
  tdEl.textContent = 'User Name';
  tdEl.style.color = '#ffe400';
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = 'Level';
  tdEl.style.color = '#ffe400';
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = 'Score';
  tdEl.style.color = '#ffe400';
  trEl.appendChild(tdEl);

  scoresTable.appendChild(trEl);

  for(var i in High.users) {
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = High.users[i].userName;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = High.users[i].level;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = High.users[i].scored;
    trEl.appendChild(tdEl);

    scoresTable.appendChild(trEl);

  }
}

function yourScore() {
  var pEl = document.getElementById('yourScore');
  pEl.textContent = 'Current Score: ' + userScore;
}


new High('SRJJ', 9, 15000);
new High('Joe', 8, 13000);
new High('Becky',7, 11000);
new High('Steph', 6, 9000);
new High('Jim', 5, 7000);



var userName = 'Booger';
var userLevel = 10;
var userScore = 15000;
//new High(userName, userLevel, userScore);


function checkScores() {
  if(userScore >= High.users[0].scored) {
    High.users[0].level = (userLevel += 1);
    High.users[0].scored = (userScore += 1);
    userLevel = userLevel -= 1;
    userScore = userScore -= 1;
  }
  if(userScore >= High.users[1].scored) {
    High.users[4].userName = High.users[3].userName;
    High.users[4].level = High.users[3].level;
    High.users[4].scored = High.users[3].scored;

    High.users[3].userName = High.users[2].userName;
    High.users[3].level = High.users[2].level;
    High.users[3].scored = High.users[2].scored;

    High.users[2].userName = High.users[1].userName;
    High.users[2].level = High.users[1].level;
    High.users[2].scored = High.users[1].scored;

    High.users[1].userName = userName;
    High.users[1].level = userLevel;
    High.users[1].scored = userScore;
    createTable();
  }
  if(userScore >= High.users[2].scored && userScore < High.users[1].scored) {
    High.users[4].userName = High.users[3].userName;
    High.users[4].level = High.users[3].level;
    High.users[4].scored = High.users[3].scored;

    High.users[3].userName = High.users[2].userName;
    High.users[3].level = High.users[2].level;
    High.users[3].scored = High.users[2].scored;

    High.users[2].userName = userName;
    High.users[2].level = userLevel;
    High.users[2].scored = userScore;
    createTable();
  }
  if(userScore >= High.users[3].scored && userScore < High.users[2].scored) {

    High.users[4].userName = High.users[3].userName;
    High.users[4].level = High.users[3].level;
    High.users[4].scored = High.users[3].scored;

    High.users[3].userName = userName;
    High.users[3].level = userLevel;
    High.users[3].scored = userScore;
    createTable();
  }
  if(userScore >= High.users[4].scored && userScore < High.users[3].scored) {

    High.users[4].userName = userName;
    High.users[4].level = userLevel;
    High.users[4].scored = userScore;
    createTable();
  }
}


yourScore();
checkScores();
//createTable();