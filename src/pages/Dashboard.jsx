import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.id.toString() === id) {
      setUser(storedUser);
    }
    const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];
    setArticles(storedArticles);
  }, [id]);

  if (!user) {
    return <h2 style={{ textAlign: "center" }}>User not found or not logged in!</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Welcome, {user.name}</h2>
      <h3>Your Articles:</h3>
      {articles.length > 0 ? (
        <ul>
          {articles.map((a, index) => (
            <li key={index}>
              <strong>{a.title}</strong> - {a.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
