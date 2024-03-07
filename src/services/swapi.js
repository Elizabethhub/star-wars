const BASE_URL = "https://swapi.tech/api/";

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
    return data.result;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
export const fetchSpecies = async () => {
  try {
    const response = await fetch(`${BASE_URL}species/`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching species:", error);
    return [];
  }
};
export const fetchSpaceship = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching spaceship:", error);
    return null;
  }
};
export const fetchOneCharacter = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching spaceship:", error);
    return null;
  }
};
