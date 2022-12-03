import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoutes = ({ children }) => {
  const { currentUser } = useAuth();

  return !currentUser ?
    children :
    <Navigate to="/profile" />;
};

export default PublicRoutes;