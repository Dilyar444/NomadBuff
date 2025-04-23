import React from 'react';
import './TopThree.css';

const TopThree = ({ students }) => {
  return (
    <div className="podium">
      {students.map((student, index) => {
        const place = index + 1;
        return (
          <div key={index} className={`place place-${place}`}>
            <div className="circle">
              <div className="place-label">{place} место</div>
              <div className="score">{student.score}</div>
              <div className="name">{student.last_name} {student.first_name}</div>
              <div className="group">{student.group}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopThree;
