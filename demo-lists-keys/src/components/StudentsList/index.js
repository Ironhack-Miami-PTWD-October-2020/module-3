// import React, { Component } from "react";

import React from "react";

class StudentsList extends React.Component {
  state = {
    students: ["Rachel", "Ida", "Ana", "Chris", "Felix", "Sebastian"]
  };

  render() {
    return (
      <>
        <h2> Students </h2>
        <i> (an example with an array of strings) </i>

        {/* using index is an anti-pattern and should be avoided. use an ID if you have it available in any other case  */}
        <ul>
          {this.state.students.map((student, index) => {
            return <li key={index}> {student} </li>;
          })}
        </ul>
      </>
    );
  }
}

export default StudentsList;
