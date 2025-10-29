import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const addTask = ({ title, priority }) => {
    const newTask = {
      id: Date.now(),
      title,
      isCompleted: false,
      priority,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id) => {
    const newTitle = prompt("Edit task title:");
    if (newTitle) {
      setTasks(tasks.map((t) => (t.id === id ? { ...t, title: newTitle } : t)));
    }
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <TaskInput onAddTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={tasks}
        filter={filter}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}
