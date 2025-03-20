from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Goal(BaseModel):
    id: int
    title: str
    completed: bool = False

goals_db = []  # Temporary in-memory storage

@app.get("/")
def root():
    return {"message": "Goal Tracker API is running!"}

@app.get("/goals", response_model=List[Goal])
def get_goals():
    return goals_db

@app.post("/goals")
def create_goal(goal: Goal):
    goals_db.append(goal)
    return {"message": "Goal added successfully!"}

@app.delete("/goals/{goal_id}")
def delete_goal(goal_id: int):
    global goals_db
    goals_db = [g for g in goals_db if g.id != goal_id]
    return {"message": "Goal deleted successfully!"}

