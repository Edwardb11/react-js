import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/slices/favoritePokemon";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const favoritePokemon = useSelector((state) => state.favoritePokemon.favorites);

  const isFavorite = favoritePokemon.includes(pokemon.name);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(pokemon.name));
    } else {
      dispatch(addFavorite(pokemon.name));
    }
  };


  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 m-4 w-72">
      <img
        src={pokemon.sprites.back_default}
        alt={pokemon.name}
        className="mx-auto rounded-lg"
      />
      <p className="text-center text-xl font-semibold mt-2">{pokemon.name}</p>
      <button
        onClick={toggleFavorite}
        className={`mt-2 mx-auto px-4 py-2 rounded ${
          isFavorite ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        } hover:bg-opacity-75 cursor-pointer transition-colors duration-300`}
      >
        {isFavorite ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
      </button>
    </div>
  );
};

export default PokemonCard;
