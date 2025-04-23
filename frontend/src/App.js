import React, { useEffect, useState } from "react";
import CourseSelector from "./components/CourseSelector";
import TopThree from "./components/TopThree";
import StudentTable from "./components/StudentTable";
import axios from "axios";
import "./App.css";

function App() {
  const [course, setCourse] = useState(1);
  const [faculty, setFaculty] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    let url = `http://localhost:8000/api/students/?course=${course}`;
    if (faculty && faculty !== "All") {
      url += `&faculty=${encodeURIComponent(faculty)}`;
    }

    axios.get(url).then(res => {
      setStudents(res.data);
    });
  }, [course, faculty]);

  const topThree = students.slice(0, 3);
  const others = students.slice(3);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1 className="header1">NOMAD</h1>
          <h1 className="header2">.BUFF</h1>
        </div>
        <CourseSelector
          course={course}
          setCourse={setCourse}
          onFacultySelect={(selectedCourse, selectedFaculty) => {
            setCourse(selectedCourse);
            setFaculty(selectedFaculty);
          }}
        />
      </header>

      <TopThree students={topThree} />
      <StudentTable students={others} />
    </div>
  );
}

export default App;
