import React from "react";

const User = (props) => {
  return (
    <div>
      User is {props.fullName} and attends {props.bootcamp}
    </div>
  );
};

// const User = ({ fullName, bootcamp }) => {
//   return (
//     <div>
//       User is {fullName} and attends {bootcamp}
//     </div>
//   );
// };

export default User;
