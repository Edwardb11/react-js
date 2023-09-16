import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "./publicRouter";
import PrivateRoute from "./privateRouter";
import { useSelector } from "react-redux";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import FavoritePokemonPage from "../pages/FavoritePokemon";

export function Router() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/favorites" element={<FavoritePokemonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
