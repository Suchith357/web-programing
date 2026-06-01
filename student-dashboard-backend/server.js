const mongoose = require("mongoose");
const Student = require("./models/Student");
const User = require("./models/User");
const express = require("express");
const cors = require("cors");
const app = express();
mongoose
  .connect("mongodb://localhost:27017/studentDashboard")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid Password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    "secretkey",
  );

  res.json({
    token,
  });
});
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json({
    message: "Signup Successful",
  });
});
let students = [
  {
    id: 1,
    name: "Suchith",
    age: 18,
  },
  {
    id: 2,
    name: "Rahul",
    age: 20,
  },
];

app.get("/students", async (req, res) => {
  const students = await Student.find();

  res.json(students);
});
app.post("/students", async (req, res) => {
  const student = await Student.create({
    name: req.body.name,

    age: req.body.age,
  });

  res.json(student);
});
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);

  res.json({
    message: "Student Deleted",
  });
});
app.put("/students/:id", async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      age: req.body.age,
    },
    {
      new: true,
    },
  );

  res.json(updatedStudent);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
