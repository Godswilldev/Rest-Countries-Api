import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { CountriesContext } from "../Context/CountriesContext";
import { Input } from "./SearchStyles";
const Search = () => {
  const { mode } = useContext(ThemeContext);
  const { dispatch, search } = useContext(CountriesContext);

  return (
    <Input
      theme={mode}
      type="search"
      name="search"
      id="search"
      placeholder="Search for a Country..."
      value={search}
      onChange={(evt) =>
        dispatch({
          type: "HANDLE INPUT",
          name: evt.target.name,
          payload: evt.target.value,
        })
      }
    />
  );
};

export default Search;
