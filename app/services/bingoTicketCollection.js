"use strict";

var ticketStringParser = require("./ticketStringParser");
var BingoTicket = require("./bingoTicket");

function BingoTicketCollection(ticketString){

  this.tickets = [];

  var ticketValues = ticketStringParser.parse(ticketString);
  for (var i = 0; i < ticketValues.length; i++){
    this.tickets.push(new BingoTicket(ticketValues[i]));
  }

}

module.exports = BingoTicketCollection;
