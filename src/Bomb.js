// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  secondsLeft = () => {
    return this.state.secondsLeft == 0
      ? "Boom!"
      : `${this.state.secondsLeft} seconds left before I go boom!`;
  };

  render() {
    return <div>{this.secondsLeft()}</div>;
  }
}
