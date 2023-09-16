import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slices/auth";
import { removeallFavorite } from "../../redux/slices/favoritePokemon";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(removeallFavorite());
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-white font-semibold">Pokémon App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              to={"/favorites"}
              className="text-white hover:text-gray-300 transition duration-300">
              Favoritos
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="text-white hover:text-gray-300 transition duration-300">
              Lista de Pokémon
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
