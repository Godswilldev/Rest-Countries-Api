import React, { useContext } from "react";
import useInputState from "../Hooks/useInputState";
import { ThemeContext } from "../Context/ThemeContext";
import { Input } from "./SearchStyles";
const Search = () => {
  const [search, setSearch, handleSubmit] = useInputState();
  const { mode } = useContext(ThemeContext);
  return (
    <form onSubmit={handleSubmit}>
      <Input
        theme={mode}
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={setSearch}
        placeholder="Search for a Country..."
      />
    </form>
  );
};

export default Search;
