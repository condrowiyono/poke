import { useQuery } from "@apollo/client";
import useParams from "../router/hooks/useParams";
import getPokemonDetail from "../service/getPokemonDetail";
import { Response } from "../types/common";
import { Pokemon } from "../types/pokemon";

type Params = {
  name?: string;
};

const PokemonDetail = () => {
  const { name } = useParams();
  const { data } = useQuery<Response<Pokemon[]>>(getPokemonDetail(name), {
    variables: { name },
  });

  return (
    <div>
      <div>Detail</div>

      {data && data.data?.length === 0 ? (
        <div>No Data</div>
      ) : (
        <>
          <div>Name:{data?.data[0].name}</div>
          <div>
            Type:
            {data?.data[0].pokemon_v2_pokemontypes
              .map((t) => t.pokemon_v2_type.name)
              .join(", ")}
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
