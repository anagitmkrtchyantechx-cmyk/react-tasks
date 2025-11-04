import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404 - Page Not Found 😢</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
