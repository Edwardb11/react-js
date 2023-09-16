import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import favoritePokemonSlice from "./slices/favoritePokemon";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
};

const favoritePokemonPersistConfig = {
  key: "favoritePokemon",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);
const persistedFavoritePokemonReducer = persistReducer(
  favoritePokemonPersistConfig,
  favoritePokemonSlice
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    favoritePokemon: persistedFavoritePokemonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
