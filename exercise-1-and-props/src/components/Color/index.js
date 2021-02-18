import React from "react";

class Color extends React.Component {
  // constructor(props){

  //     state = {}
  // }

  render() {
    return <hr style={{ border: `5px solid ${this.props.favColor}` }} />;
  }
}

export default Color;
