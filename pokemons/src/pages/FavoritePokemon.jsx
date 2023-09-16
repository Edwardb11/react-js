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
      <PokemonList pokemonDetails={favoritePokemon} isFavoritePage={true} />
    </div>
  );
};

export default FavoritePokemonPage;
