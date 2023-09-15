import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "./publicRouter";
import PrivateRoute from "./privateRouter";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useEffect, useState } from "react";
import { getUserCredentials } from "../utils/auth";

export function Router() {
  const [isUserLogin, setisUserLogin] = useState();

  useEffect(() => {
    const user = getUserCredentials();
    if (user) {
      setisUserLogin(true);
    } else {
      setisUserLogin(false);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isUserLogin={isUserLogin} />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute isUserLogin={isUserLogin} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
