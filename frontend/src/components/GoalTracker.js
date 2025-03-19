import React, { useState } from 'react';

function GoalTracker() {
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const addGoal = () => {
    if (goal.trim() !== "") {
      setGoalList([...goalList, goal]);
      setGoal("");
    }
  };

  return (
    <div>
      <h2>📅 Goal Tracker</h2>
      <input 
        type="text" 
        placeholder="Enter your goal..." 
        value={goal} 
        onChange={(e) => setGoal(e.target.value)}
      />
      <button onClick={addGoal}>Add Goal</button>

      <ul>
        {goalList.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default GoalTracker;
