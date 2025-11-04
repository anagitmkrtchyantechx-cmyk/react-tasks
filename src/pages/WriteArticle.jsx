import React, { useState } from "react";

const WriteArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveArticle = () => {
    if (!title || !content) return alert("Please fill all fields!");

    const existing = JSON.parse(localStorage.getItem("articles")) || [];
    const newArticle = { title, content, date: new Date().toLocaleString() };
    localStorage.setItem("articles", JSON.stringify([...existing, newArticle]));

    alert("Article saved!");
    setTitle("");
    setContent("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Write an Article</h2>
      <input
        type="text"
        placeholder="Article title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "60%", padding: "8px", marginBottom: "10px" }}
      />
      <br />
      <textarea
        placeholder="Article content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "60%", height: "100px", padding: "8px" }}
      />
      <br />
      <button onClick={saveArticle}>Save Article</button>
    </div>
  );
};

export default WriteArticle;
