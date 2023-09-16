import PokemonList from "../components/pokemonList";
import usePokemonData from "../hooks/usePokemonData";

const Home = () => {
  const pokemonDetails = usePokemonData();

  return (
    <div>
      <PokemonList pokemonDetails={pokemonDetails} />
    </div>
  );
};

export default Home;
