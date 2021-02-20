import "./App.css";

import StudentsList from "./components/StudentsList";

import CohortInfo from "./components/CohortInfo";

import ConditionalExample from "./components/ConditionalExample";

const cohorts = [
  {
    id: "001",
    start_date: new Date(2021, 2, 20),
    end_date: new Date(2021, 8, 20),
    students: [
      {
        id: "abc",
        name: "Ana",
        age: 21
      },
      {
        id: "abr",
        name: "Ida",
        age: 23
      },
      {
        id: "ert",
        name: "Rachel",
        age: 26
      }
    ]
  },
  {
    id: "002",
    start_date: new Date(2020, 4, 20),
    end_date: new Date(2020, 10, 20),
    students: [
      {
        id: "abr",
        name: "Sebastian",
        age: 24
      },
      {
        id: "tyu",
        name: "Felix",
        age: 29
      },
      {
        id: "erio",
        name: "Chris",
        age: 26
      }
    ]
  }
];

function App() {
  return (
    <div className='App'>
      <StudentsList />

      <hr />

      {/* <ul>
        {cohorts.map((cohort) => {
          return <li key={cohort.id}>{cohort.id}</li>;
        })}
      </ul> */}

      {cohorts.map((cohort) => {
        {
          /* return <CohortInfo key={cohort.id} start_date={cohort.start_date} end_date={cohort.end_date}/> */
        }

        return <CohortInfo key={cohort.id} {...cohort} />;
      })}

      <hr />

      <ConditionalExample />
    </div>
  );
}

export default App;
