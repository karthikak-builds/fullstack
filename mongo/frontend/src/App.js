import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // Fetch data
  useEffect(() => {
    axios.get("http://localhost:5000/students")
      .then(res => setStudents(res.data));
  }, []);

  // Add student
  const addStudent = () => {
    axios.post("http://localhost:5000/students", {
      name, course
    }).then(() => {
      alert("Student Added");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student List</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Course" onChange={e => setCourse(e.target.value)} />

      <button onClick={addStudent}>Add</button>

      <ul>
        {students.map((s, index) => (
          <li key={index}>{s.name} - {s.course}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
