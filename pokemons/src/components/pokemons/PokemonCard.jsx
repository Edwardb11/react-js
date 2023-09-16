import FavoriteButton from "../buttons/FavoriteButton";

const PokemonCard = ({ pokemon, isFavoritePage }) => {
  const imageUrl = isFavoritePage && pokemon.imageUrl ? pokemon.imageUrl : pokemon.sprites.back_default;

  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 m-4 w-72">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={pokemon.name}
          className="mx-auto rounded-lg"
        />
      )}
      <p className="text-center text-xl font-semibold mt-2">{pokemon.name}</p>
      <FavoriteButton pokemon={pokemon} isFavoritePage={isFavoritePage} />
    </div>
  );
};

export default PokemonCard;
