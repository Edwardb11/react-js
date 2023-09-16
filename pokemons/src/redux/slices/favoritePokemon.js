import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritePokemonSlice = createSlice({
  name: "favoritePokemon",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push({ name: action.payload.name, imageUrl: action.payload.imageUrl });
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (pokemon) => pokemon.name !== action.payload.name
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritePokemonSlice.actions;

export default favoritePokemonSlice.reducer;
