import React from "react";
import "./CourseSelector.css";

const CourseSelector = ({ course, setCourse }) => {
  return (
    <div className="course-selector-container">
      {[1, 2, 3].map((c) => (
        <button
          key={c}
          onClick={() => setCourse(c)}
          className={`course-button ${course === c ? 'active' : ''}`}
        >
          {c} курс
        </button>
      ))}
    </div>
  );
};

export default CourseSelector;