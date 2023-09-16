import { useState, useEffect } from "react";

function useFilter(pokemonDetails) {
  const [filterName, setFilterName] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    if (pokemonDetails) {
      const filtered = pokemonDetails.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filterName.toLowerCase())
      );
      setFilteredPokemon(filtered);
    }
  }, [pokemonDetails, filterName]);

  const handleFilterChange = (value) => {
    setFilterName(value);
  };

  return {
    filterName,
    filteredPokemon,
    handleFilterChange,
  };
}

export default useFilter;
