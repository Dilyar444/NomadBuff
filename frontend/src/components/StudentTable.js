import React from 'react';
import './StudentTable.css';

const StudentTable = ({ students }) => {
  return (
    <div className="student-table-container">
      <table>
        <thead>
          <tr>
            <th>Рейтинг</th>
            <th>Имя</th>
            <th>Группа</th>
            <th>Баллы</th>
          </tr>
        </thead>
        <tbody>
        {students.map((student, index) => {
          let scoreClass = "";
          if (student.score >= 85) {
            scoreClass = "score-high";
          } else if (student.score >= 70) {
            scoreClass = "score-medium";
          } else if (student.score >= 55) {
            scoreClass = "score-low";
          }

          return (
            <tr key={index} className={scoreClass}>
              <td>{index + 4}</td>
              <td>{student.last_name} {student.first_name}</td>
              <td>{student.group}</td>
              <td>{student.score}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
