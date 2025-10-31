import React, { useState, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import { getUserFromStorage, saveUserToStorage, removeUserFromStorage } from "./utils/localStorageUtils";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = getUserFromStorage();
    if (storedUser) {
      setCurrentUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (currentUser) saveUserToStorage(currentUser);
  }, [currentUser]);

  const handleLogin = (username, email) => {
    const user = { username, email, lastLogin: new Date().toLocaleString() };
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    removeUserFromStorage();
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, currentUser, handleLogin, handleLogout }}>
      <div className="app-container">
        <Header />
        {!isLoggedIn ? <Login /> : <Dashboard />}
      </div>
    </UserContext.Provider>
  );
};

export default App;
