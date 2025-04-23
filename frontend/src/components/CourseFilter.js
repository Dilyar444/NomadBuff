import React, { useState } from 'react';
import './CourseFilter.css';

const faculties = ['IT-Business', 'Business', 'HR-manager', 'Graphic-Design', 'Marketing'];

const CourseFilter = ({ onSelect }) => {
  const [activeCourse, setActiveCourse] = useState(null);
  const [showFaculties, setShowFaculties] = useState(false);

  const handleCourseHover = (course) => {
    setActiveCourse(course);
    setShowFaculties(true);
  };

  const handleFacultyClick = (faculty) => {
    onSelect(activeCourse, faculty);
    setShowFaculties(false);
  };

  return (
    <div className="course-filter">
      {[1, 2, 3].map(course => (
        <div
          key={course}
          className="course-btn"
          onMouseEnter={() => handleCourseHover(course)}
          onMouseLeave={() => setShowFaculties(false)}
        >
          {course} курс
          {showFaculties && activeCourse === course && (
            <div className="faculty-dropdown">
              {faculties.map(faculty => (
                <div
                  key={faculty}
                  className="faculty-item"
                  onClick={() => handleFacultyClick(faculty)}
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

export default CourseFilter;
