import { useState } from "react";

function La4P5() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]); // add new task
    setTask(""); // clear input
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h2>Sai Suchith 24BCE0092</h2>

      <h3>Todo List</h3>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>

      <ul style={{ marginTop: "20px", listStyleType: "none" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default La4P5;