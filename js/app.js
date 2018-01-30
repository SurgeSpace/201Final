'use strict';

var game = document.getElementById('gameTable');
var numbers = document.getElementById('numberTable');

var gameSize = 5;

var tableTotal = 0;

var gameNumbers = [];

var cellNumber = -1;

var topCells = [];
var rightCells = [];
var bottomCells = [];
var leftCells = [];

var rowLength = parseInt(gameSize);
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

  console.log(tableTotal);
  // console.log(gameNumbers);
  if(tableTotal > (gameSize * gameSize * 2)){
    location.reload();
  }
  makeNumberTable();
}

function makeNumberTable(){
  for(var i = 0; i < gameSize; i++){
    var trEl = document.createElement('tr');
    for(var j = 0; j < gameSize; j++){
      var tdEl = document.createElement('td');
      tdEl.textContent = gameNumbers[j];
      trEl.appendChild(tdEl);
    }
    numbers.appendChild(trEl);
  }
}

function edgeCells() {
  var edge = 0;
  topCells.push(edge);
  for(var i = 0; i < gameSize - 1; i++){
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
  gameNumbers[clickCell] = gameNumbers[clickCell] + 1;
  clearAndCheck();
  console.log(gameNumbers);
}

function clearAndCheck(){
  for(var i in gameNumbers){
    if(gameNumbers[i] > 3){
      event.target.style.backgroundColor = 'green';
      gameNumbers[i] = 0;
      updateNeighbors();
    }
  }
}

function updateNeighbors(){
  console.log(clickCell);
  if(clickCell === 0){
    gameNumbers[clickCell + 1] = gameNumbers[clickCell + 1] + 1;
    gameNumbers[clickCell + rowLength] = gameNumbers[clickCell + rowLength] + 1;
  }
  else if(clickCell === rowLength){
    gameNumbers[clickCell - 1] = gameNumbers[clickCell - 1] + 1;
    gameNumbers[clickCell + rowLength] = gameNumbers[clickCell + rowLength] + 1;
  }
  else if(clickCell === bottomCells[(rowLength * rowLength) - (rowLength)]){
    gameNumbers[clickCell + 1] = gameNumbers[clickCell + 1] + 1;
    gameNumbers[clickCell - rowLength] = gameNumbers[clickCell - rowLength] + 1;
  }
  else if(clickCell === rowLength * rowLength){
    gameNumbers[clickCell - 1] = gameNumbers[clickCell - 1] + 1;
    gameNumbers[clickCell - rowLength] = gameNumbers[clickCell - rowLength] + 1;
  }
  else if(leftCells.includes(clickCell)){
    gameNumbers[clickCell + 1] = gameNumbers[clickCell + 1] + 1;
    gameNumbers[clickCell + rowLength] = gameNumbers[clickCell + rowLength] + 1;
    gameNumbers[clickCell - rowLength] = gameNumbers[clickCell - rowLength] + 1;
  }
  else if(rightCells.includes(clickCell)){
    gameNumbers[clickCell - 1] = gameNumbers[clickCell - 1] + 1;
    gameNumbers[clickCell + rowLength] = gameNumbers[clickCell + rowLength] + 1;
    gameNumbers[clickCell - rowLength] = gameNumbers[clickCell - rowLength] + 1;
  }
  else if(topCells.includes(clickCell)){
    gameNumbers[clickCell + 1] = gameNumbers[clickCell + 1] + 1;
    gameNumbers[clickCell - 1] = gameNumbers[clickCell - 1] + 1;
    gameNumbers[clickCell + rowLength] = gameNumbers[clickCell + rowLength] + 1;
  }
  else if(bottomCells.includes(clickCell)){ console.log(clickCell);
    gameNumbers[clickCell + 1] = gameNumbers[clickCell + 1] + 1;
    gameNumbers[clickCell - 1] = gameNumbers[clickCell - 1] + 1;
    gameNumbers[clickCell - rowLength] = gameNumbers[clickCell - rowLength] + 1;
  }
  else {
    gameNumbers[clickCell + 1] = gameNumbers[clickCell + 1] + 1;
    gameNumbers[clickCell - 1] = gameNumbers[clickCell - 1] + 1;
    gameNumbers[clickCell + rowLength] = gameNumbers[clickCell + rowLength] + 1;
    gameNumbers[clickCell - rowLength] = gameNumbers[clickCell - rowLength] + 1;
  }
  clearAndCheck();
}

game.addEventListener('click', updateNumbers);

makeGameTable();
edgeCells();
