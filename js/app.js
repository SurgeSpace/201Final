'use strict';

var game = document.getElementById('gameTable');

var gameSize = 3;

var tableTotal = 0;

var gameNumbers = [];

var cellNumber = 0;

var topCells = [];
var rightCells = [];
var bottomCells = [];
var leftCells = [];

function randomNumber() {
  return Math.floor(Math.random() * Math.floor(3) + 1);
}

function makeGameTable(){
  for (var i = 1; i < gameSize + 1; i++) {
    var trEl = document.createElement('tr');
    for(var j = 1; j < gameSize + 1; j++){
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
  console.log(gameNumbers);
  if(tableTotal > (gameSize * gameSize * 2)){
    location.reload();
  }
}

function edgeCells() {
  var edge = 0;
  for(var i = 1; i < gameSize + 1; i++){
    edge++;
    topCells.push(edge);
  }
  rightCells.push(edge);
  for(var j = 1; j < gameSize; j++){
    edge = edge + gameSize;
    rightCells.push(edge);    
  }
  edge = 1;
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
}

makeGameTable();
edgeCells();
