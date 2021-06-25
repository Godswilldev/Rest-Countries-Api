import React, { createContext, useReducer } from "react";
import CountriesReducer from "../Reducer/CountriesReducer";
export const CountriesContext = createContext();
export const CountriesProvider = ({ children }) => {
  const initialState = {
    countries: [],
    loading: false,
    currentCountry: null,
    search: "",
  };
  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  return (
    <CountriesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
};
