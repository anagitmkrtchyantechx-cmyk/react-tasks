// src/ProfileCard.jsx
import React from "react";

function ProfileCard({ name, title, imageUrl }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        width: "220px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h2 style={{ margin: "8px 0 4px" }}>{name}</h2>
      <p style={{ color: "#666", fontSize: "14px" }}>{title}</p>
    </div>
  );
}

export default ProfileCard;
