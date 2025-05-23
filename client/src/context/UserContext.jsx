import { createContext, useContext, useState } from "react";

// Create context
const UserContext = createContext();

// Helper function to sanitize user object (e.g., username)
const sanitizeUser = (user) => {
  if (!user) return null;
  return {
    ...user,
    username:
      typeof user.username === "string"
        ? user.username.replace(/[^a-zA-Z0-9_]/g, "")
        : "",
  };
};

// Create provider component
export const UserProvider = ({ children }) => {
  const [user, setUserRaw] = useState(null); // user is initially null

  // Wrap setUser to sanitize input
  const setUser = (u) => setUserRaw(sanitizeUser(u));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
