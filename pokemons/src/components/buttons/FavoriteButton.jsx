import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/slices/favoritePokemon";

const FavoriteButton = ({ pokemon, isFavoritePage }) => {
  const dispatch = useDispatch();
  const favoritePokemon = useSelector(
    (state) => state.favoritePokemon.favorites
  );
  const isFavorite = favoritePokemon.some((fav) => fav.name === pokemon.name);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ name: pokemon.name }));
    } else {
      dispatch(
        addFavorite({
          name: pokemon.name,
          imageUrl: pokemon.sprites.back_default,
        })
      );
    }
  };
  if (isFavoritePage) {
    return (
      <button
        onClick={toggleFavorite}
        className="mt-2 mx-auto px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-opacity-75 transition-colors duration-300">
        Eliminar de Favoritos
      </button>
    );
  } else {
    return (
      <button
        onClick={toggleFavorite}
        className={`mt-2 mx-auto px-4 py-2 rounded ${
          isFavorite ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        } hover:bg-opacity-75 cursor-pointer transition-colors duration-300`}>
        {isFavorite ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
      </button>
    );
  }
};

export default FavoriteButton;
