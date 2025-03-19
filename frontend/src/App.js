import React, { useState } from 'react';
import './App.css';
import './components/TodoList.css';
import GoalTracker from './components/GoalTracker';
import CertificationTracker from './components/CertificationTracker';
import TodoList from './components/TodoList';

function App() {
  const [section, setSection] = useState("goals");

  return (
    <div className="App">
      <h1>🚀 DevOps Goal Tracker</h1>
      
      <nav>
        <button onClick={() => setSection("goals")}>🎯 Goals</button>
        <button onClick={() => setSection("certifications")}>🎓 Certifications</button>
        <button onClick={() => setSection("todo")}>✅ To-Do List</button>
      </nav>

      <div className="tracker-container">
        {section === "goals" && <GoalTracker />}
        {section === "certifications" && <CertificationTracker />}
        {section === "todo" && <TodoList />}
      </div>
    </div>
  );
}

export default App;

