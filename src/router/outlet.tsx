import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Match } from "./context";

type OutletContextType = {
  matches?: Match[];
};

type OutletProviderType = {
  matches: Match[];
  children?: ReactElement | ReactNode | null;
};

const OutletContext = createContext<OutletContextType>({
  matches: [],
});

const OutletProvider = ({ matches, children }: OutletProviderType) => {
  return (
    <OutletContext.Provider
      value={{
        matches,
      }}
    >
      {children}
    </OutletContext.Provider>
  );
};

export { OutletContext };
export default OutletProvider;
