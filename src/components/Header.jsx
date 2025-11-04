import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#f3f3f3" }}>
      <Link to="/login">Login</Link>
      <Link to="/write">Write Article</Link>
    </nav>
  );
};

export default Header;
