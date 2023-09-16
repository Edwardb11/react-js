import { useSelector } from "react-redux";
import Navbar from "../components/navbar/Navbar";
import PokemonList from "../components/pokemons/PokemonList";

const FavoritePokemonPage = () => {
  const favoritePokemon = useSelector(
    (state) => state.favoritePokemon.favorites
  );
  return (
    <div>
      <Navbar />
      {favoritePokemon.length === 0 ? (
        <p className="text-center text-xl mt-8 text-gray-600">
          No tienes Pokémon favoritos.
        </p>
      ) : (
        <PokemonList
          pokemonDetails={favoritePokemon}
          isFavoritePage={true}
          title={"Pokemones Favoritos"}
        />
      )}{" "}
    </div>
  );
};

export default FavoritePokemonPage;
