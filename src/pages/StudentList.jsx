import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null); // Optional: to handle errors

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://royalblue-fox-884927.hostingersite.com/data/students.json');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setStudents(data.students);
      } catch (error) {
        console.error(error);
        setError(error.message); // Set the error message in the state
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-indigo-600 text-2xl font-bold mb-4">Student List</h2>
      {error && <p className="text-red-600 mb-4">Error: {error}</p>}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-3 px-4 border-b">ID</th>
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Age</th>
            <th className="py-3 px-4 border-b">Major</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-100">
              <td className="py-3 px-4 border-b text-center">{student.id}</td>
              <td className="py-3 px-4 border-b text-gray-700 text-center">{student.name}</td>
              <td className="py-3 px-4 border-b text-gray-700 text-center">{student.age}</td>
              <td className="py-3 px-4 border-b text-gray-700 text-center">{student.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
