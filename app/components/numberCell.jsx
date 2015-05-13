"use strict";

var React = require("react");

module.exports = React.createClass({
  render: function() {
    if (this.props.value === 0){
      return (
        <div className="numberCell"></div>
      );
    }
    return (
      <div className="numberCell">{this.props.value}</div>
    );
  }
});
