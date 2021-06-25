const CountriesReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT":
      return {
        ...state,
        [action.name]: action.payload,
      };

    case "SET COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "SENDING REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "REQUEST FINISHED":
      return {
        ...state,
        loading: false,
      };
    case "SET ONE COUNTRY":
      return {
        ...state,
        currentCountry: action.payload,
      };
    default:
      return state;
  }
};

export default CountriesReducer;
