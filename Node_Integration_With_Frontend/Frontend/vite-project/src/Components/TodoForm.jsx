import React, { useState } from "react";

function TodoForm({ onAdd }) {
  const [employeeName, setEmployeeName] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ employeeName, task });
    setEmployeeName("");
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        required
      /> <br />
      <input
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      /> <br />
      <button className="Add-Todo-btn" type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
