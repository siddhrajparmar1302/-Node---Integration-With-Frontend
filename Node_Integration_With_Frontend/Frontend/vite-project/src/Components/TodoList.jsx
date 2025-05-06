import React, { useState } from "react";

function TodoList({ todos, onUpdate, onDelete }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    employeeName: "",
    task: "",
    status: "",
  });

  const handleEditClick = (todo) => {
    setEditId(todo._id);
    setEditData({
      employeeName: todo.employeeName,
      task: todo.task,
      status: todo.status,
    });
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onUpdate(editId, editData);
    setEditId(null);
  };

  return (
    <div>
      <h3>To-Do List Table</h3>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              {editId === todo._id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="employeeName"
                      value={editData.employeeName}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="task"
                      value={editData.task}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select name="status" value={editData.status} onChange={handleChange}>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditId(null)} style={{ marginLeft: "10px" }}>
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{todo.employeeName}</td>
                  <td>{todo.task}</td>
                  <td>{todo.status}</td>
                  <td>
                    {todo.status !== "completed" && (
                      <button
                        className="delete-btn"
                        onClick={() => onUpdate(todo._id, { status: "completed" })}
                      >
                        Mark Done
                      </button>
                    )}
                    <button
                      className="edit-btn"
                      onClick={() => handleEditClick(todo)}
                      style={{ marginLeft: "5px" }}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => onDelete(todo._id)}
                      style={{ marginLeft: "5px" }}
                    >
                      Delete
                    </button>
                    
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
