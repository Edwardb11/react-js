import PokemonCard from "./PokemonCard";
import useFilter from "../../hooks/useFilter";

const PokemonList = ({ pokemonDetails, isFavoritePage }) => {
  const { filterType, filteredPokemon, handleFilterChange } =
    useFilter(pokemonDetails);

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-4">
        Lista de Pokemones
      </h1>
      <input
        type="text"
        placeholder="Filtrar por tipo"
        value={filterType}
        onChange={(e) => handleFilterChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md mb-2"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {filteredPokemon.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} isFavoritePage={isFavoritePage} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
