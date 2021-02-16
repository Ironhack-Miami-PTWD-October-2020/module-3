import React, { Component } from "react";

// class User extends React.Component {
class User extends Component {
  render() {
    //   this is JS comment
    return (
      // 🚨🚨 everything needs to be wrapped up with one tag 🚨🚨
      // in this case, we used an empty <></> tag
      <>
        {/* this is HTML comment in React */}
        <h4>This is USER component</h4>
        <p> This is just a paragraph. </p>
      </>
    );
  }
}

// 🚨🚨 must export the component in order to use it somewhere else 🚨🚨
export default User;
