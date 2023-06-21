import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  state: [URL, Dispatch<SetStateAction<URL>>];
  matchedPathname: string;
};

type RouterObject = {
  path: string;
  element?: ReactElement;
};

type RouterProviderProps = {
  router?: RouterObject[];
};

const Context = createContext<ContextType>({
  state: [new URL(window.location.href), () => {}],
  matchedPathname: "",
});

const RouterProvider = ({ router }: RouterProviderProps) => {
  const [route, setRoute] = useState(new URL(window.location.href));

  const matchedPath = router.find(({ path }) => {
    // add wildcard for dynamic route, startWith :

    const pathSplit = path.split("/");
    const routeSplit = route.pathname.split("/");

    const isMatched = pathSplit.every((path, index) => {
      if (path.startsWith(":")) return true;

      return path === routeSplit[index];
    });

    return isMatched && pathSplit.length === routeSplit.length;
  });

  const matchedPathname = matchedPath ? matchedPath.path : "";
  const matchedElement = matchedPath ? matchedPath.element : "404";

  useEffect(() => {
    const handlePopState = () => {
      setRoute(new URL(window.location.href));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <Context.Provider value={{ state: [route, setRoute], matchedPathname }}>
      {matchedElement}
    </Context.Provider>
  );
};

export { Context, RouterProvider };
export type { RouterObject };
