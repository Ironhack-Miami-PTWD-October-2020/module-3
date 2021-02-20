import React from "react";

const StudentInfo = (props) => {
  const { name, age } = props;
  return (
    <>
      <em>{name}</em> - {age}
    </>
  );
};

export default StudentInfo;
