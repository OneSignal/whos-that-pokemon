import { useState } from "react";
import "./styles.css";
import { pokemonList, Pokemon } from "./pokemon";

const getPokemon = (id: number): Pokemon => pokemonList[id];

interface FetcherProps {
  pokemon: Pokemon | undefined;
  onClick: () => void;
}

const PokemonFetcher = ({ pokemon, onClick }: FetcherProps) => {
  const handleClick = async () => {
    onClick();
  };

  return (
    <div>
      <div>{pokemon && <img src={pokemon.sprites.front_default} />}</div>
      <button onClick={handleClick}>get pokemon</button>
    </div>
  );
};

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const handleGetPokemon = () => {
    const rst = getPokemon(1);
    setPokemon(rst);
  };

  return (
    <div className="App">
      <h1>Who's that Pokemon?</h1>

      <PokemonFetcher pokemon={pokemon} onClick={handleGetPokemon} />

      <div>
        <input placeholder="Pokemon name" type="text" />
        <button>submit</button>
      </div>
    </div>
  );
}
