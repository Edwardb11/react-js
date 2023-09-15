import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "./publicRouter";
import PrivateRoute from "./privateRouter";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import Home from "../pages/home";

export function Router() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
