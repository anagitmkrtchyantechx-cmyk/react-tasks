import React from "react";
import "./styles/RecentActivity.css";

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      <p>Your recent dashboard activities</p>
      <div className="activity success">
        <span>✅ Successfully logged in</span>
        <small>Just now</small>
      </div>
      <div className="activity info">
        <span>📊 Dashboard accessed</span>
        <small>Just now</small>
      </div>
    </div>
  );
};

export default RecentActivity;
