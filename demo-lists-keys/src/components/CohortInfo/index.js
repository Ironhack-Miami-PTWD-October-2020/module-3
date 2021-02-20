import React from "react";

import StudentInfo from "../StudentInfo";

// export default class CohortInfo extends React.Component {

// class CohortInfo extends React.Component {
//   constructor(props) {
//     super(props);

//     // console.log(this.props);
//   }
//   render() {
//     const { id, start_date, end_date, students } = this.props;
//     return (
//       <>
//         <h3> Cohort {id} </h3>
//         <h4>
//           start: {start_date.toDateString()} - end: {end_date.toDateString()}
//         </h4>
//         <ul>
//           {students.map((student) => {
//             return <li key={student.id}> {student.name} </li>;
//           })}
//         </ul>
//       </>
//     );
//   }
// }

const CohortInfo = (props) => {
  const { id, start_date, end_date, students } = props;
  return (
    <>
      <h3> Cohort {id} </h3>
      <h4>
        start: {start_date.toDateString()} - end: {end_date.toDateString()}
      </h4>
      {/* <ul>
        {students.map((student) => {
          return <li key={student.id}> {student.name} </li>;
        })}
      </ul> */}

      <ul>
        {students.map((student) => {
          {
            /* return <StudentInfo key={student.id} name={student.name} age={student.age}/> */
          }
          return (
            <li>
              <StudentInfo key={student.id} {...student} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CohortInfo;
