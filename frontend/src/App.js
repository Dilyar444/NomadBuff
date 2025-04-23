
import React, { useEffect, useState } from "react";
import CourseSelector from "./components/CourseSelector";
import TopThree from "./components/TopThree";
import StudentTable from "./components/StudentTable";
import axios from "axios";

function App() {
  const [course, setCourse] = useState(1);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/students/?course=${course}`).then(res => {
      setStudents(res.data);
    });
  }, [course]);

  const topThree = students.slice(0, 3);
  const others = students.slice(3);

  return (
    <div className="App">
      <h1 class= "header1">NOMAD</h1>
      <h1 class= "header2">.BUFF</h1>
      
      <CourseSelector course={course} setCourse={setCourse} />
      <TopThree students={topThree} />
      <StudentTable students={others} />
    </div>
  );
}

export default App;
