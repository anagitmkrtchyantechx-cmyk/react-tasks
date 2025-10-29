import React from "react";
import "./Header.css";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>To-Do List</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}
