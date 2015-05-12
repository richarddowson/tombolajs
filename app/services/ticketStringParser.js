"use strict";

var reg = /^\d+$/;

function parse(ticketString){
  if (!(typeof ticketString === 'string' || ticketString instanceof String)){
    throw new Error("Ticket string must be a string");
  }
  if (ticketString.length === 0 || ticketString.length % 30 > 0){
    throw new Error("Ticket string must be a multiple of 30 digits long");
  }
  if (!reg.test(ticketString)) {
    throw new Error("Ticket string contains non-numeric characters");
  }
  var result = [],
      working = [],
      duplicates = [],
      stringIndex = 0;
  while (stringIndex < ticketString.length){
    var value = parseInt(ticketString.charAt(stringIndex++) + ticketString.charAt(stringIndex++));
    if (value < 1 || value > 90) {
      throw new Error("Ticket string may only contain the values 01 to 90");
    }
    if (duplicates[value]) {
      throw new Error("Ticket string may not contain duplicate entries");
    }
    duplicates[value] = true;
    if (working.push(value) === 15) {
      result.push(working);
      working = [];
    }
  }
  return result;
}

module.exports = {
  parse: parse
};
