"use strict";

var React = require("react");
var NumberCell = require("./numberCell.jsx");
var NumberToGoPanel = require("./numberToGoPanel.jsx");

var ticketRow = React.createClass({
  render: function(){
    var cells = this.props.cells.map(function(cell){
      return (<td>{cell}</td>);
    });
    return (<tr>{cells}</tr>);
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div className="ticket">
        <div className="ticketContent">
          <table>
            <tbody>
            {this.props.ticket.rows.map(function(row, i){
              return (
                <tr key={i}>
                  {row.map(function(cell, i){
                    return (
                      <td key={i} className="ticketCell"><NumberCell value={cell}></NumberCell></td>
                    );
                  })}
                </tr>
              );
            })}
            </tbody>
          </table>
          <NumberToGoPanel value={this.props.ticket.toGo}></NumberToGoPanel>
        </div>
      </div>
    );
  }
});