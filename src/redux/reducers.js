const initialState = {
  filters: {
    movies: "",
    name: "",
    gender: "",
    minMass: "",
    maxMass: "",
  },
  characters: [],
  movies: [],
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
    default:
      return state;
  }
};

export default rootReducer;
