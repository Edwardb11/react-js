import { useState, useEffect } from "react";

function useFilter(pokemonDetails) {
  const [filterType, setFilterType] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const filtered = pokemonDetails.filter((pokemon) =>
      pokemon.types.some((type) =>
        type.type.name.toLowerCase().includes(filterType.toLowerCase())
      )
    );
    setFilteredPokemon(filtered);
  }, [pokemonDetails, filterType]);

  const handleFilterChange = (value) => {
    setFilterType(value);
  };

  return {
    filterType,
    filteredPokemon,
    handleFilterChange,
  };
}

export default useFilter;
