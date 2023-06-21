import About from "./pages/About";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PokemonDetail from "./pages/PokemonDetail";
import { RouterProvider, RouterObject } from "./router/context";

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
  return <RouterProvider router={router} />;
};

export default App;
