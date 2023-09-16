import Navbar from "../components/navbar/Navbar";
import PokemonList from "../components/pokemons/PokemonList";
import usePokemonData from "../hooks/usePokemonData";

const Home = () => {
  const pokemonDetails = usePokemonData();

  return (
    <div>
      <Navbar />
      <PokemonList pokemonDetails={pokemonDetails} />
    </div>
  );
};

export default Home;
