import Navbar from "../components/navbar/Navbar";
import PokemonList from "../components/pokemons/PokemonList";
import usePokemonData from "../hooks/usePokemonData";

const HomePage = () => {
  const pokemonDetails = usePokemonData();

  return (
    <div>
      <Navbar />
      <PokemonList pokemonDetails={pokemonDetails} />
    </div>
  );
};

export default HomePage;
