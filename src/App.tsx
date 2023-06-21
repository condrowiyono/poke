import About from "./pages/About";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PokemonDetail from "./pages/PokemonDetail";
import { RouterProvider, RouterObject } from "./router/context";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

const router: RouterObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDetail />,
  },
];

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};

export default App;
