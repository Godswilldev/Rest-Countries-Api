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
    try {
      dispatch({ type: "SendingRequest" });
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      dispatch({ type: "SetCountries", data: data });
      dispatch({ type: "RequestFinished" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CountriesContext.Provider
      value={{
        ...state,
        getAllCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
