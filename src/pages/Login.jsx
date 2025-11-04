import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) return alert("Enter a username!");

    const userId = Date.now(); // unique ID
    localStorage.setItem("user", JSON.stringify({ id: userId, name: username }));
    navigate(`/user/${userId}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin} style={{ marginLeft: "10px" }}>Login</button>
    </div>
  );
};

export default Login;
