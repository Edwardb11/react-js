import { Navigate, Outlet } from "react-router";

export default function PrivateRoute({ isAuthenticated }) {
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
}
