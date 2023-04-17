import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({});
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  const previousPage = () => {
    setUrl(pokemon.previous);
  };
  const nextPage = () => {
    setUrl(pokemon.next);
  };


  return (
    <main>
      {pokemon?.previous && (
        <button onClick={previousPage} type="button">Previous Page</button>
      )}
      {pokemon?.next && (
        <button onClick={nextPage} type="button">Next Page</button>
      )}
      <ul>
        {pokemon && pokemon.results && pokemon.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}