import React, { useState } from "react";
import "./CourseSelector.css";

const faculties = ['All','IT-Business', 'Business', 'HR-manager', 'Graphic-Design', 'Marketing'];

const CourseSelector = ({ course, setCourse, onFacultySelect }) => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <div className="course-selector-container">
      {[1, 2, 3].map((c) => (
        <div
          key={c}
          className="course-wrapper"
          onMouseEnter={() => setHoveredCourse(c)}
          onMouseLeave={() => setHoveredCourse(null)}
        >
          <button
            onClick={() => setCourse(c)}
            className={`course-button ${course === c ? 'active' : ''}`}
          >
            {c} курс
          </button>

          {hoveredCourse === c && (
            <div className="faculty-dropdown">
              {faculties.map((faculty) => (
                <div
                  key={faculty}
                  className="faculty-item"
                  onClick={() => onFacultySelect(c, faculty === 'All' ? null : faculty)}
                >
                  {faculty}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseSelector;
