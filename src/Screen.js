import React from "react";
import "./App.css";
export default class Screen extends React.Component {
  render() {
    return <div id={this.props.id}>{this.props.currentNumber}</div>;
  }
}
