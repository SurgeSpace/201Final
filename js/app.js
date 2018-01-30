'use strict';

var game = document.getElementById('gameTable');

var gameSize = 5;

var topIndex = parseInt(gameSize - 1);

var tableTotal = 0;

var gameNumbers = [];

var gameIndex = 0;

var cellNumber = -1;

var clearedCells = [];

var clickCounter = 0;
var clicksRemaining = 0;
var gameScore = 0;

var topCells = [];
var rightCells = [];
var bottomCells = [];
var leftCells = [];

var clickCell = 0;

function randomNumber() {
  return Math.floor(Math.random() * Math.floor(3) + 1);
}

function makeGameTable(){
  for (var i = 0; i < gameSize; i++) {
    var trEl = document.createElement('tr');
    for(var j = 0; j < gameSize; j++){
      cellNumber++;
      var tdEl = document.createElement('td');
      var button = document.createElement('button');
      button.setAttribute('id', cellNumber);
      tdEl.appendChild(button);
      trEl.appendChild(tdEl);
      var cellValue = randomNumber();
      tableTotal = tableTotal + cellValue;
      gameNumbers.push(cellValue);
    }
    game.appendChild(trEl);
  }
  gameIndex = parseInt(gameNumbers.length) - 1;
  console.log(gameIndex);
  console.log(tableTotal);
  console.log(gameNumbers);
  if(tableTotal > (gameSize * gameSize * 2)){
    location.reload();
  }
}

function edgeCells() {
  var edge = 0;
  topCells.push(edge);
  for(var i = 0; i < topIndex; i++){
    edge++;
    topCells.push(edge);
  }
  rightCells.push(edge);
  for(var j = 1; j < gameSize; j++){
    edge = edge + gameSize;
    rightCells.push(edge);    
  }
  edge = 0;
  leftCells.push(edge);
  for(var k = 1; k < gameSize; k++){
    edge = edge + gameSize;
    leftCells.push(edge);  
  }
  bottomCells.push(edge);
  for(var l = 1; l < gameSize; l++){
    edge++;
    bottomCells.push(edge);
  }
  topCells.pop();
  topCells.shift();
  rightCells.pop();
  rightCells.shift();
  leftCells.pop();
  leftCells.shift();
  bottomCells.pop();
  bottomCells.shift();
}

function updateNumbers(event){
  clickCell = parseInt(event.target.id);
  console.log(clickCell);
  clickTracker();
  gameNumbers[clickCell] = gameNumbers[clickCell] + 1;
  clearAndCheck();
  // updateNeighbors();
}
function clickTracker(){
  clickCounter = clickCounter + 1;
  clicksRemaining = clicksRemaining - 1;
  if(clicksRemaining === 0){
    var gameMsg = document.getElementById('gameMsg');
    var lostMsg = document.createElement('p');
    lostMsg.textContent = ('Sorry. You took too many clicks and lost this game.');
    gameMsg.appendChild(lostMsg);
  } 
}
// var affectedCells = [];

function clearAndCheck(){
  for(var i in gameNumbers){
    if(gameNumbers[i] > 3){
      clickCell = parseInt(i);
      clearedCells.push(i);
      var currentIndex = i;
      document.getElementById(currentIndex).style.visibility = 'hidden';
      gameNumbers[i] = 0;
      gameScore = gameScore + 100;
      if(clearedCells.length === gameNumbers.length){
        var gameMsg = document.getElementById('gameMsg');
        var winMsg = document.createElement('p');
        winMsg.textContent = ('Congratulations!! You have beaten this level.  Are you ready to move to the next level?');
        gameMsg.appendChild(winMsg);
      }
      updateNeighbors();
    }
  }
}

function updateNeighbors(){
  //code for 1st cell
  if(clickCell === 0){
    rightCell();
    bottomCell();
    console.log('1st');
  }
  //code for top right cell
  else if(clickCell === topIndex){
    leftCell();
    bottomCell();
    console.log('topR');
  }
  //code for bottom left cell
  else if(clickCell === (gameIndex - (gameSize - 1))){
    rightCell();
    topCell();
    console.log('botL');
  }
  //code for last cell
  else if(clickCell === gameIndex){
    leftCell();
    topCell();
    console.log('last');
  }
  //code for left edge interior cells
  else if(leftCells.includes(clickCell)){
    rightCell();
    topCell();
    bottomCell();
    console.log('lei');
  }
  //code for right edge interior cells
  else if(rightCells.includes(clickCell)){
    leftCell();
    topCell();
    bottomCell();
    console.log('rei');
  }
  //code for top interior cells
  else if(topCells.includes(clickCell)){
    rightCell();
    leftCell();
    bottomCell();
    console.log('ti');
  }
  //code for bottom interior cells
  else if(bottomCells.includes(clickCell)){ console.log(clickCell);
    rightCell();
    leftCell();
    topCell();
    console.log('bi');
  }
  //code for all interior cells
  else {
    rightCell();
    leftCell();
    topCell();
    bottomCell();
    console.log('i');
  }
  console.log(gameNumbers);
  clearAndCheck();
  for(var i in clearedCells){
    console.log(clearedCells);
    gameNumbers[clearedCells[i]] = 0;
  }
}

function rightCell(){
  gameNumbers[clickCell + 1] = gameNumbers[clickCell + 1] + 1;
  console.log(clickCell);
  console.log(clickCell + 1);
}
function leftCell(){
  gameNumbers[clickCell - 1] = gameNumbers[clickCell - 1] + 1;
}
function topCell(){
  gameNumbers[clickCell - gameSize] = gameNumbers[clickCell - gameSize] + 1;
}
function bottomCell(){
  gameNumbers[clickCell + gameSize] = gameNumbers[clickCell + gameSize] + 1;
}


game.addEventListener('click', updateNumbers);

makeGameTable();
edgeCells();
