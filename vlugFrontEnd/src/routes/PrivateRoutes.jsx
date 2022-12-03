import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ?
    children :
    <Navigate to="/" />;
};

export default PrivateRoutes;