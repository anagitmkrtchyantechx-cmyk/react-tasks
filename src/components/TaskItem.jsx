import React from "react";
import "./TaskItem.css";

export default function TaskItem({ task, onToggleComplete, onDelete, onEdit }) {
  return (
    <div className={`task-item ${task.isCompleted ? "completed" : ""} ${task.priority}`}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggleComplete(task.id)}
      />
      <span>{task.title}</span>
      <div className="actions">
        <button onClick={() => onEdit(task.id)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
