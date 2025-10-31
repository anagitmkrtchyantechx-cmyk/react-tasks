import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./styles/Login.css";

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email) {
      handleLogin(username, email);
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <p>Sign in to access your personal dashboard</p>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" className="login-btn">Sign In →</button>
      </form>
    </div>
  );
};

export default Login;
