import { useContext, useEffect } from "react";
import OutletProvider, { OutletContext } from "../outlet";
import RouteContext from "../route";

const useOutlet = () => {
  const { outlet, matches } = useContext(RouteContext);

  return <OutletProvider matches={matches}>{outlet}</OutletProvider>;
};

export default useOutlet;
