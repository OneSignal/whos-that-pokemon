export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export const pokemonList: Pokemon[] = [
  {
    name: "bulbasaur",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  },
  {
    name: "ivysaur",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
  },
];
