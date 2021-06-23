const CountriesReducer = (state, action) => {
  switch (action.type) {
    case "SetCountries":
      return {
        ...state,
        countries: action.data,
      };
    case "SendingRequest":
      return {
        ...state,
        loading: true,
      };
    case "RequestFinished":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default CountriesReducer;
