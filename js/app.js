'use strict';

var game = document.getElementById('gameTable');
// var number = document.getElementById('numberTable');
var gameSize = 5;
var tableTotal = 0;
// var row = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
// var cell = ['0', '1', '2', '3', '4', '5', '6'];
var gameNumbers = [];
var cellNumber = 0;

function randomNumber() {
  return Math.floor(Math.random() * Math.floor(3) + 1);
}

// function makeNumberTable(){
//   for (var i = 1; i < gameSize + 1; i++) {
//     var trEl = document.createElement('tr');
//     for(var j = 1; j < gameSize + 1; j++){
//       var tdEl = document.createElement('td');
//       tdEl.setAttribute('id', row[i] + ' ' + cell[j]);
//       var cellNumber = randomNumber();
//       tableTotal = tableTotal + cellNumber;
//       tdEl.textContent = cellNumber;
//       trEl.appendChild(tdEl);
//     }
//     number.appendChild(trEl);
//   }
//   console.log(tableTotal);
//   if(tableTotal > (gameSize * gameSize * 2)){
//     location.reload();
//   }
// }

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

makeGameTable();
// makeNumberTable();