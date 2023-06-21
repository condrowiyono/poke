import { gql } from "@apollo/client/core";

const getPokemonDetail = (name: string) => {
  return gql`
    query Pokemon($name: String) {
      data: pokemon_v2_pokemon(
        limit: 1
        where: {
          ${name ? `name: { _eq: $name }` : ""}
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

export default getPokemonDetail;
