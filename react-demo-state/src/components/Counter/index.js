import React from "react";

class Counter extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0
  //     };
  //   }

  state = {
    count: 0
  };

  handleIncrementClick = () => {
    // console.log("clicking");

    // this.state.count ++; 🚨🚨🚨 never mutate state directly

    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleIncrementClick}>+</button>
      </div>
    );
  }
}

export default Counter;
