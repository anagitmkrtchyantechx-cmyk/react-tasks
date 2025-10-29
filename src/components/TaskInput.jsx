import React, { useState } from "react";
import "./TaskInput.css";

export default function TaskInput({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const handleAdd = () => {
    if (title.trim() === "") return;
    onAddTask({ title, priority });
    setTitle("");
    setPriority("low");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={title}
        placeholder="Add a new task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}
