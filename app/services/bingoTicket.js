"use strict";

function BingoTicket(numbersArray) {
  this.rows = [];
  for (var row = 0; row < 3; row++){
    this.rows[row] = [0,0,0,0,0,0,0,0,0];
    for (var i = 0; i < 5; i++){
      var value = numbersArray.shift();
      var col = value === 90 ? 8 : Math.floor(value / 10);
      this.rows[row][col] = value;
    }
  }
}

module.exports = BingoTicket;
