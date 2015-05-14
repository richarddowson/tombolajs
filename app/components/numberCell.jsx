"use strict";

var React = require("react");

module.exports = React.createClass({
  getInitialState: function() {
    return {loading: true, value: Math.floor(Math.random() * 89) + 1}
  },
  componentDidMount: function() {
    var timeout =  Math.floor(Math.random() * 1900) + 100;
    setTimeout(this.finishLoading, timeout);
  },
  finishLoading: function(){
    this.setState({loading: false, value: this.props.value});
  },
  render: function() {
    if (this.state.value === 0){
      return (
        <div className="numberCell"></div>
      );
    }
    var classString = "numberCell";
    if (this.state.loading){
      classString += " numberCellLoading";
    }
    return (
      <div className={classString}>{this.state.value}</div>
    );
  }
});
