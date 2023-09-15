import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}/pokemon`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetails = async (pokemonName) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
