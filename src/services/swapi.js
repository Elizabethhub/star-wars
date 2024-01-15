const BASE_URL = "https://swapi.dev/api/";

export const fetchCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}people/`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
export const fetchMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}films/`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
