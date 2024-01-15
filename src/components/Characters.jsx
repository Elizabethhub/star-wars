import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacters, fetchMovies } from "../services/swapi";
import { setCharacters, setMovies } from "../redux/actions";
import FilterForm from "./FilterForm";
import styled from "styled-components";

const CharacterListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const CharacterListItem = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
  list-style: none;

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #ff5555;
    }
  }
`;

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const filters = useSelector((state) => state.filters);

  React.useEffect(() => {
    const getCharacters = async () => {
      let fetchedCharacters = await fetchCharacters();
      fetchedCharacters = fetchedCharacters.map((character) => {
        if (!["male", "female"].includes(character.gender)) {
          return { ...character, gender: "other" };
        }
        return character;
      });
      dispatch(setCharacters(fetchedCharacters));
    };
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies();
      const movies = fetchedMovies.map((movie) => movie);
      dispatch(setMovies(movies));
    };
    getCharacters();
    getMovies();
  }, [dispatch]);

  const filteredCharacters = characters.filter((character) => {
    return (
      (filters.movies === "" || character.films.includes(filters.movies) || filters.movies === "All") &&
      (filters.name === "" || character.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.gender === "" || character.gender.toLowerCase() === filters.gender.toLowerCase()) &&
      (filters.minMass === "" || parseInt(character.mass, 10) >= parseInt(filters.minMass, 10)) &&
      (filters.maxMass === "" || parseInt(character.mass, 10) <= parseInt(filters.maxMass, 10))
    );
  });

  return (
    <CharacterListContainer>
      <FilterForm />
      <h2>Star Wars Characters</h2>
      <ul>
        {filteredCharacters.map((character) => (
          <CharacterListItem key={character.url}>
            <Link to={`/characters/${character.url.split("/").slice(-2, -1)}`}>{character.name}</Link>
          </CharacterListItem>
        ))}
      </ul>
    </CharacterListContainer>
  );
};

export default Characters;
