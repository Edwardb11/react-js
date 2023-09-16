import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/slices/favoritePokemon";
import Navbar from "../components/navbar/Navbar";

const FavoritePokemon = () => {
  const favoritePokemon = useSelector(
    (state) => state.favoritePokemon.favorites
  );
  const dispatch = useDispatch();

  const handleRemoveFavorite = (pokemonName) => {
    dispatch(removeFavorite({ name: pokemonName }));
  };

  return (
    <>
    <Navbar/>
  
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Mis Pokemones Favoritos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoritePokemon.map((pokemon, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 shadow-md rounded-lg p-4"
            >
              <p className="text-xl font-semibold mb-2">{pokemon.name}</p>
              <img
                src={pokemon.imageUrl} 
                alt={pokemon.name}
                className="mx-auto mb-4"
                width={100}
              />
              <button
                onClick={() => handleRemoveFavorite(pokemon.name)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-opacity-75 cursor-pointer transition-colors duration-300"
              >
                Eliminar de Favoritos
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FavoritePokemon;
