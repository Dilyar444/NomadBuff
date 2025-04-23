import React from 'react';
import './StudentTable.css';

const StudentTable = ({ students }) => {
  return (
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
        {students.map((student, index) => (
          <tr key={index}>
            <td>{index + 4}</td>
            <td>{student.last_name} {student.first_name}</td>
            <td>{student.group}</td>
            <td>{student.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
