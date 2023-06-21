type PokemonType = {
  id: number;
  name: string;
};

type Pokemon = {
  name: string;
  id: number;
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: PokemonType;
  }[];
};

export type { Pokemon, PokemonType };
