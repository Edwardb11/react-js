import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritePokemonSlice = createSlice({
  name: "favoritePokemon",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (pokemonName) => pokemonName !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritePokemonSlice.actions;

export default favoritePokemonSlice.reducer;
