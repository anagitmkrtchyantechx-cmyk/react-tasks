import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import RecentActivity from "./RecentActivity";
import "./styles/Dashboard.css";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="dashboard">
      <h1>Welcome back, {currentUser.username}!</h1>
      <p>Today is {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
      
      <div className="info-cards">
        <div className="card profile">
          <h3>Profile</h3>
          <p><strong>{currentUser.username}</strong></p>
          <small>🟢 Active user</small>
        </div>
        <div className="card email">
          <h3>Email</h3>
          <p><strong>{currentUser.email}</strong></p>
          <small>✅ Verified account</small>
        </div>
        <div className="card login">
          <h3>Last Login</h3>
          <p><strong>Today</strong></p>
          <small>🕒 Session active</small>
        </div>
      </div>

      <RecentActivity />
    </div>
  );
};

export default Dashboard;
