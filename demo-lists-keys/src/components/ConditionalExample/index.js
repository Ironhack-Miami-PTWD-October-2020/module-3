import React from "react";

class ConditionalExample extends React.Component {
  state = {
    active: true
  };

  toggle = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    const isLoggedIn = false;
    const age = 1;

    return (
      <>
        <button onClick={this.toggle}>Toggle</button>

        {this.state.active && <p>Hey, I am here!</p>}

        {(isLoggedIn && <p>You are logged in!</p>) || <strong>You have to login first!</strong>}

        {(age < 20 && <p>You are young!</p>) || (age < 80 && <p>You are at OK age!</p>) || <p>You are old!</p>}
      </>
    );
  }
}

export default ConditionalExample;
