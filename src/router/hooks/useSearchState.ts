import { SetStateAction, useMemo } from "react";
import useNavigate from "./useNavigate";

const useSearchState = <T extends { [K in keyof T]: string }>(initial?: T) => {
  const navigate = useNavigate();
  const search = window.location.search;
  const params = new URLSearchParams(search);

  // TO-DO: Combine from params with initial
  // convert params to object like type

  const urlSearchObj = Object.fromEntries(params);

  const searchObj = useMemo<T>(
    () => ({ ...initial, ...urlSearchObj }),
    [search]
  );

  const setState = (state?: SetStateAction<{ [K in keyof T]: string }>) => {
    if (state === undefined) {
      navigate(window.location.pathname);
      return;
    }

    const newSearchObj = typeof state === "function" ? state(searchObj) : state;

    const newParams = new URLSearchParams();
    for (const key in newSearchObj) {
      newParams.append(key, newSearchObj[key]);
    }

    const url = new URL(window.location.href);
    url.search = newParams.toString();

    navigate(url.toString());
  };

  return [searchObj as T, setState] as const;
};

export default useSearchState;
