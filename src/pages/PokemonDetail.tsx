import useParams from "../router/hooks/useParams";

type Params = {
  name?: string;
};
const PokemonDetail = () => {
  const { name } = useParams();

  return (
    <div>
      <div>Detail</div>
      <div>{name}</div>
    </div>
  );
};

export default PokemonDetail;
