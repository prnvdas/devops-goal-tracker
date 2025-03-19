import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = () => {
    if (task.trim() !== "") {
      const date = new Date();
      const formattedDate = `${date.toDateString()} (${date.toLocaleDateString("en-US", { weekday: "long" })})`;
      setTasks([...tasks, { text: task, completed: false, date: formattedDate, color: getRandomColor() }]);
      setTask("");
    }
  };

  // Toggle task completion (strike-through)
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Remove a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Generate random colors for each task card
  const getRandomColor = () => {
    const colors = ["#3498db", "#e74c3c", "#f39c12", "#2ecc71", "#9b59b6"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      <h2>✅ To-Do List</h2>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter a task..." 
          value={task} 
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((t, index) => (
          <div key={index} className="task-card" style={{ backgroundColor: t.color }}>
            <div className="task-content">
              <h3 style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.text}</h3>
              <p>{t.date}</p>
            </div>
            <div className="task-actions">
              <input type="checkbox" checked={t.completed} onChange={() => toggleTask(index)} />
              <button className="delete-button" onClick={() => removeTask(index)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;

