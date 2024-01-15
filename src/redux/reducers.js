export const initialState = {
  filters: {
    movies: "",
    name: "",
    gender: "",
    minMass: "",
    maxMass: "",
  },
  characters: [],
  movies: [],
  species: [],
  spaceships: [],
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTERS":
      return {
        ...state,
        filters: action.payload,
      };
    case "SET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "SET_SPECIES":
      return {
        ...state,
        species: action.payload,
      };
    case "SET_SPACESHIPS":
      return {
        ...state,
        spaceships: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
