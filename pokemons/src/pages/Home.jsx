import  { useState, useEffect } from "react";
import { getPokemonList, getPokemonDetails } from "../utils/api";

const Home = () => {
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

  return (
    <div>
      <h1>List of Pokémon</h1>
      <div>
        {pokemonDetails.map((pokemon, index) => (
          <div key={index}>
            <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            <p>Name: {pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
