import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import RenderedRoute from "./components/RenderedRoute";

type ContextType = {
  state: [URL, Dispatch<SetStateAction<URL>>];
  matchedPathname: string;
};

type RouterObject = {
  path: string;
  element?: ReactElement;
  children?: RouterObject[];
  exact?: boolean;
};

type RouterProviderProps = {
  router?: RouterObject[];
};

const Context = createContext<ContextType>({
  state: [new URL(window.location.href), () => {}],
  matchedPathname: "",
});

type Match = RouterObject & {
  children?: RouterObject[];
};

const findElement = (router: RouterObject[], path: string): Match[] => {
  const pathSegment = path.split("/").slice(1);

  let matches: Match[] = [];
  const traverse = (routes: RouterObject[], parentPath: string) => {
    for (const route of routes) {
      const { path, element, children, exact } = route;

      // prepend "/" before pathSegment
      const segment = "/" + pathSegment[0];

      // wildcarding /:anyword
      // remove '/' then checked with startWith(":")
      const wildcard = path.slice(1).startsWith(":");

      if (path === segment || wildcard) {
        if (exact) {
          matches = [{ path: parentPath + path, element }];
        } else {
          matches.push({ path: parentPath + path, element });
        }

        pathSegment.shift();
        if (children && pathSegment.length) {
          traverse(children, parentPath + path);
        }
      }
    }
  };

  traverse(router, "");

  return matches;
};

const checkSamePathname = (path: string, matches: Match[]) => {
  console.log(path, matches);
  const pathSegment = path.split("/").slice(1);
  const lastMatchPathSegment = matches[matches.length - 1].path
    .split("/")
    .slice(1);
  let found = false;

  if (pathSegment.length !== lastMatchPathSegment.length) return false;

  while (pathSegment.length && !found) {
    const segment = pathSegment.shift();
    const lastMatchSegment = lastMatchPathSegment.shift();

    if (segment === lastMatchSegment || lastMatchSegment.startsWith(":")) {
      found = true;
    }
  }

  return found;
};

const RouterProvider = ({ router }: RouterProviderProps) => {
  const [route, setRoute] = useState(new URL(window.location.href));
  const matches = findElement(router, route.pathname);

  console.log(checkSamePathname(route.pathname, matches));
  let element = <div>404. Not Found</div>;

  if (checkSamePathname(route.pathname, matches)) {
    // render the array matches resursively from last index to beginning
    element = matches.reduceRight(
      (outlet, match) => (
        <RenderedRoute
          outlet={outlet}
          match={match}
          matches={matches}
          children={match.element ? match.element : outlet}
        />
      ),
      null as React.ReactElement | null
    );
  }

  useEffect(() => {
    const handlePopState = () => {
      setRoute(new URL(window.location.href));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <Context.Provider
      value={{
        state: [route, setRoute],
        matchedPathname: matches[matches.length - 1].path,
      }}
    >
      {element}
    </Context.Provider>
  );
};

export { Context, RouterProvider };
export type { RouterObject, Match };
