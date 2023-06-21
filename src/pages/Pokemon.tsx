import { FormEvent } from "react";
import Link from "../router/components/Link";
import useSearchState from "../router/hooks/useSearchState";

enum PokemonType {
  Fire = "🔥",
  Common = "🌳",
  Water = "💧",
  Electric = "⚡",
  Ice = "❄️",
  Flying = "🦅",
  Psychic = "🔮",
  Bug = "🐛",
  Rock = "🪨",
  Ghost = "👻",
  Dark = "🌑",
  Dragon = "🐉",
  Steel = "🔩",
  Fairy = "🧚",
  Poison = "☠️",
  Fighting = "🥊",
  Normal = "👤",
  Ground = "🌍",
}

type PokemonParams = {
  name?: string;
  type?: keyof typeof PokemonType;
};

const Pokemon = () => {
  const [params, setState] = useSearchState<PokemonParams>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formParams: PokemonParams = Object.fromEntries(formData.entries());

    setState((old) => ({ ...old, ...formParams }));
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
            {Object.keys(PokemonType).map((type) => (
              <option key={type} value={type}>
                {PokemonType[type]} - {type}
              </option>
            ))}
          </select>

          <button type="submit">Cari</button>
          <button type="reset">Reset</button>
        </form>
      </fieldset>
      <div>Pokemon</div>
    </div>
  );
};

export default Pokemon;
