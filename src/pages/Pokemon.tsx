import { FormEvent } from "react";
import Link from "../router/components/Link";
import useSearchState from "../router/hooks/useSearchState";
import { useQuery } from "@apollo/client";
import getPokemons from "../service/getPokemon";
import { Response } from "../types/common";
import type { Pokemon } from "../types/pokemon";

enum PokemonTypeEnum {
  fire = "🔥",
  water = "💧",
  electric = "⚡",
  ice = "❄️",
  flying = "🦅",
  psychic = "🔮",
  bug = "🐛",
  rock = "🪨",
  ghost = "👻",
  dark = "🌑",
  dragon = "🐉",
  steel = "🔩",
  fairy = "🧚",
  poison = "☠️",
  fighting = "🥊",
  normal = "👤",
  ground = "🌍",
}

type PokemonParams = {
  name?: string;
  type?: keyof typeof PokemonTypeEnum;
};

const Pokemon = () => {
  const [params, setParams] = useSearchState<PokemonParams>({});

  const { data, loading } = useQuery<Response<Pokemon[]>>(getPokemons(params), {
    variables: {
      ...params,
      limit: 100,
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formParams: PokemonParams = Object.fromEntries(formData.entries());

    setParams((old) => ({ ...old, ...formParams }));
  };

  return (
    <div>
      <h1>Pokemon</h1>
      <fieldset>
        <legend>Filter</legend>
        {/* PRO TIP: HOVER TO GET TYPE */}
        <form style={{ display: "flex", gap: 12 }} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input defaultValue={params.name} type="text" id="name" name="name" />

          <select defaultValue={params.type} name="type" id="type">
            <option value="">All</option>
            {Object.keys(PokemonTypeEnum).map((type) => (
              <option key={type} value={type}>
                {PokemonTypeEnum[type]} - {type}
              </option>
            ))}
          </select>

          <button type="submit">Cari</button>
          <button type="reset" onClick={() => setParams(undefined)}>
            Reset
          </button>
        </form>
      </fieldset>
      <fieldset>
        <legend>Pokemon</legend>
        {loading && <div>Loading...</div>}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {data?.data?.map((poke) => (
            <Link key={poke.id} to={`pokemon/${poke.name}`}>
              <div>
                [{poke.id}] {poke.name} (
                {poke.pokemon_v2_pokemontypes
                  .map((t) => t.pokemon_v2_type.name)
                  .join(" | ")}
                )
              </div>
            </Link>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default Pokemon;
