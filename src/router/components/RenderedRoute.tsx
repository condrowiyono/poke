import { ReactElement, ReactNode } from "react";
import { Match, RouterObject } from "../context";
import OutletProvider from "../outlet";
import RouteContext from "../route";

type RenderedRouteType = {
  matches?: Match[];
  match: Match;
  outlet: ReactElement;
  children?: ReactNode | null;
};

const RenderedRoute = ({ outlet, matches, children }: RenderedRouteType) => {
  return (
    <RouteContext.Provider value={{ outlet, matches }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RenderedRoute;
