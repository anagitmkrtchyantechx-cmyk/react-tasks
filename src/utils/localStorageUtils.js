export const saveUserToStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromStorage = () => {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
};

export const removeUserFromStorage = () => {
  localStorage.removeItem("user");
};
