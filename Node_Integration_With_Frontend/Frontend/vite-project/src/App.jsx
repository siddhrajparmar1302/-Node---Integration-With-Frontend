import React, { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import axios from "axios";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    const res = await axios.post("http://localhost:5000/api/todos", todo);
    setTodos([...todos, res.data]);
  };

  const updateTodo = async (id, updatedData) => {
    const res = await axios.put(`http://localhost:5000/api/todos/${id}`, updatedData);
    setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="App">
      <h2>Employee To-Do List</h2>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
