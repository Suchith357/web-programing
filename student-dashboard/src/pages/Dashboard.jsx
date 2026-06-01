import { useState, useEffect } from "react";
import StudentCard from "../components/StudentCard";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }

    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:5000/students");
    const data = await response.json();
    setStudents(data);
  };

  const addStudent = async () => {
    if (name === "" || age === "") return;

    const newStudent = {
      name,
      age: Number(age),
    };

    await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    fetchStudents();

    setName("");
    setAge("");
  };

  const removeStudent = async (id) => {
    await fetch(`http://localhost:5000/students/${id}`, {
      method: "DELETE",
    });

    fetchStudents();
  };

  const updateStudent = async (id) => {
    const student = students.find((student) => student._id === id);

    const updatedStudent = {
      ...student,
      age: Number(student.age) + 1,
    };

    await fetch(`http://localhost:5000/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    });

    fetchStudents();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Student Dashboard</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold">Total Students</h2>

          <p className="text-4xl mt-2">{students.length}</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold">Adults</h2>

          <p className="text-4xl mt-2">
            {students.filter((student) => student.age >= 18).length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Add Student</h2>

        <div className="flex gap-3 flex-wrap">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg flex-1"
          />

          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-3 rounded-lg w-40"
          />

          <button
            onClick={addStudent}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add Student
          </button>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded-lg w-full mb-6 shadow-sm"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students
          .filter((student) =>
            student.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((student) => (
            <StudentCard
              key={student._id}
              id={student._id}
              name={student.name}
              age={student.age}
              removeStudent={removeStudent}
              updateStudent={updateStudent}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
