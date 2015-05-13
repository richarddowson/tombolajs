"use strict";

var React = require("React");

module.exports = React.createClass({
  render: function(){
    return (
      <div className="numberToGoPanel">
        <div className="panelValue">{this.props.value}</div>
        <div>TO</div>
        <div>GO</div>
      </div>
    );
  }
});
