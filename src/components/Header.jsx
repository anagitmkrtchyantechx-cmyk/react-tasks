import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./styles/Header.css";

const Header = () => {
  const { isLoggedIn, currentUser, handleLogout } = useContext(UserContext);

  return (
    <header className="header">
      <div className="logo">🌟 Personal Dashboard</div>
      <div className="header-right">
        {isLoggedIn ? (
          <>
            <span>Welcome back, <strong>{currentUser.username}</strong></span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <span>Please log in to access your dashboard</span>
        )}
      </div>
    </header>
  );
};

export default Header;
