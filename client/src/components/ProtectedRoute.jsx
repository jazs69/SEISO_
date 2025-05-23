import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  // Sanitize username before checking (defensive, in case user object is tampered)
  const isValidUser =
    user &&
    typeof user.username === "string" &&
    /^[a-zA-Z0-9_]+$/.test(user.username);

  if (!isValidUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
