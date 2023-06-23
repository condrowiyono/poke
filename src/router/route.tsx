import { ReactElement, createContext } from "react";
import { Match } from "./context";

type RouteContextType = {
  outlet: ReactElement | null;
  matches: Match[];
};

const RouteContext = createContext<RouteContextType>({
  outlet: null,
  matches: [],
});

export default RouteContext;
