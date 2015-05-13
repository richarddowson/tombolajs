"use strict";

var React = require("react"),
    BingoTicketCollection = require("../services/bingoTicketCollection"),
    BingoTicket = require("./bingoTicket.jsx");

module.exports = React.createClass({
  render: function(){
    var tickets = this.props.tickets.map(function(ticket){
        return (
          <li>
            <BingoTicket ticket={ticket}></BingoTicket>
          </li>
        );
      });
    return (
      <div className="ticketStrip">
        <ul>{tickets}</ul>
      </div>
    );
  }
});

