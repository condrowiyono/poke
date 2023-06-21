import { gql } from "@apollo/client/core";

const getPokemons = ({ type, name }: { type?: string; name?: string }) => {
  return gql`
    query Pokemon($offset: Int, $limit: Int, $name: String, $type: String) {
      data: pokemon_v2_pokemon(
        offset: $offset
        limit: $limit
        where: {
          ${name ? `name: { _ilike: $name }` : ""}
          ${
            type
              ? `pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _like: $type } }}`
              : ""
          }
        }
      ) {
        name
        id
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  `;
};

export default getPokemons;
