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
