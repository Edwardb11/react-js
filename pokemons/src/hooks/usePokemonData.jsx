import { useState, useEffect } from "react";
import { getPokemonList, getPokemonDetails } from "../utils/api";

function usePokemonData() {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const listData = await getPokemonList();
        const detailsData = await Promise.all(
          listData.map((pokemon) => getPokemonDetails(pokemon.name))
        );
        setPokemonDetails(detailsData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchData();
  }, []);

  return pokemonDetails;
}

export default usePokemonData;
