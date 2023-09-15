import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PublicRoute({ isAuthenticated }) {
  let location = useLocation();
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="" state={{ from: location }} replace />
      ) : (
        <Outlet />
      )}
    </>
  );
}
