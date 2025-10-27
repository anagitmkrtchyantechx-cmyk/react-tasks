// src/App.jsx
import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "40px",
      }}
    >
      <ProfileCard
        name="Alice Johnson"
        title="Frontend Developer"
        imageUrl="https://randomuser.me/api/portraits/women/1.jpg"
      />

      <ProfileCard
        name="Brian Smith"
        title="Backend Engineer"
        imageUrl="https://randomuser.me/api/portraits/men/2.jpg"
      />

      <ProfileCard
        name="Catherine Lee"
        title="UI/UX Designer"
        imageUrl="https://randomuser.me/api/portraits/women/3.jpg"
      />
    </div>
  );
}

export default App;
