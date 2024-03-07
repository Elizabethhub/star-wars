import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters, setMovies, setLoading } from "../../redux/actions";
import { Link } from "react-router-dom";
import { fetchCharacters, fetchMovies, fetchOneCharacter } from "../../services/swapi";
import AppLoader from "../AppLoader";
import CharacterCard from "../hero-card/CharacterCard";
import FilterForm from "../filter/FilterForm";
import { CharacterListContainer, CharacterListItem } from "./CharactersStyled";

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const movies = useSelector((state) => state.movies);
  const filters = useSelector((state) => state.filters);
  const isLoading = useSelector((state) => state.loading);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        if (characters.length === 0) {
          const fetchedCharacters = await fetchCharacters();

          const updatedCharacters = await Promise.all(
            fetchedCharacters.map(async (person) => {
              const fullPersonInfo = await fetchOneCharacter(person.url);
              return fullPersonInfo;
            })
          );
          dispatch(setCharacters(updatedCharacters));
        }
        if (movies.length === 0) {
          const fetchedMovies = await fetchMovies();
          const movies = fetchedMovies?.map((movie) => movie);
          dispatch(setMovies(movies));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const filteredCharacters = characters.filter((character) => {
    let movieMatch;
    movies.map((movie) => {
      if (movie.properties.url === filters.movies) {
        movieMatch = movie.properties.url === filters.movies && movie.properties.characters.includes(character.properties.url);
      }

      return movieMatch;
    });

    return (
      (filters.movies === "" || movieMatch || filters.movies === "All") &&
      (filters.name === "" || character.properties.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.gender === "" || character.properties.gender.toLowerCase() === filters.gender.toLowerCase()) &&
      (filters.minMass === "" || parseInt(character.properties.mass, 10) >= parseInt(filters.minMass, 10)) &&
      (filters.maxMass === "" || parseInt(character.properties.mass, 10) <= parseInt(filters.maxMass, 10))
    );
  });
  return (
    <>
      {isLoading ? (
        <AppLoader />
      ) : (
        <CharacterListContainer>
          <FilterForm />
          <h2 style={{ textAlign: "center", color: "#fff" }}>Star Wars Characters</h2>
          <CharacterListItem>
            {filteredCharacters.map((character) => {
              return (
                <li key={character.properties.url}>
                  <Link to={`/characters/${character?.properties?.url.match(/\d+/)[0]}`}>
                    <CharacterCard character={character} />
                  </Link>
                </li>
              );
            })}
          </CharacterListItem>
        </CharacterListContainer>
      )}
    </>
  );
};

export default Characters;
