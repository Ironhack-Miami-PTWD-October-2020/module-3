import React from "react";
import User from "../User";

const UsersList = (props) => {
  return (
    <div>
      <h3> {props.location} </h3>
      {props.children}
    </div>
  );
};

export default UsersList;
