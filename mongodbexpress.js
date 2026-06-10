mkdir backend
cd backend
npm init -y
npm install express mongoose cors


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const StudentSchema = new mongoose.Schema({
  name: String,
  course: String
});

const Student = mongoose.model("Student", StudentSchema);

// API - GET
app.get("/students", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

// API - POST
app.post("/students", async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.json({ message: "Student Added" });
});

app.listen(5000, () => console.log("Server running on port 5000"));

node server.js


npx create-react-app frontend
cd frontend
npm install axios

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

npm start
