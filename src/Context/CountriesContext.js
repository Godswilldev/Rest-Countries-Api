import React, { createContext, useReducer } from "react";
import axios from "axios";
import CountriesReducer from "../Reducer/CountriesReducer";
export const CountriesContext = createContext();
export const CountriesProvider = ({ children }) => {
  const initialState = {
    countries: [],
    loading: false,
    currentCountry: null,
  };
  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  const getAllCountries = async () => {
    dispatch({ type: "SendingRequest" });
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
    dispatch({ type: "SetCountries", data: data });
    dispatch({ type: "RequestFinished" });
  };

  const getOneCountry = async (alpha3Code) => {
    dispatch({ type: "SendingRequest" });
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );
    dispatch({ type: "SetOneCountry", data: data });
    dispatch({ type: "RequestFinished" });
  };

  return (
    <CountriesContext.Provider
      value={{ ...state, getAllCountries, getOneCountry }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
