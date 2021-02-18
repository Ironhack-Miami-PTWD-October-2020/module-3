import React from "react";

// STATE CAN LIVE ONLY INSIDE CLASS COMPONENT
// later when you learn about hooks you will see that this is not 100% true, but for now take it as truthy

class Counter extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0
  //     };
  //   }

  // ✅ state is always object
  state = {
    count: 0
  };

  handleIncrementClick = () => {
    // console.log("clicking");

    // this.state.count ++; 🚨🚨🚨 never mutate state directly

    // to make sure state doesn't get mutated, use setState() method when updating the state
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
