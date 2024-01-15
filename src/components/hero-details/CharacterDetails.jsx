import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSpecies, setSpaceships, setLoading } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { fetchSpaceship, fetchSpecies } from "../../services/swapi";
import AppLoader from "../AppLoader";
import {
  CharacterDetailsContainer,
  CharacterDetailsContent,
  CharacterImage,
  CharacterImageContainer,
  ListContainer,
  ListTitle,
  ListItem,
} from "./CharacterDetailsStyled";

const CharacterDetails = () => {
  const dispatch = useDispatch();
  const { characterId } = useParams();
  const characters = useSelector((state) => state.characters);
  const movies = useSelector((state) => state.movies);
  const species = useSelector((state) => state.species);
  const spaceships = useSelector((state) => state.spaceships);
  const loading = useSelector((state) => state.loading);
  const character = characters.find((char) => char.url.includes(`/${characterId}/`));

  useEffect(() => {
    const fetchData = async () => {
      if (!character) {
        return;
      }
      dispatch(setLoading(true));
      try {
        if (species.length === 0) {
          const fetchedSpecies = await fetchSpecies();
          const species = fetchedSpecies.map((specie) => specie);
          dispatch(setSpecies(species));
        }
        const spaceshipsPromises = character.starships.map((spaceshipUrl) => {
          if (!spaceships.some((ship) => ship.url === spaceshipUrl)) {
            // Fetch the spaceship if it's not present
            return fetchSpaceship(spaceshipUrl);
          }
          // Return null if the spaceshipUrl is already present
          return null;
        });
        const filteredSpaceshipsPromises = spaceshipsPromises.filter((promise) => promise !== null);
        const fetchedSpaceships = await Promise.all(filteredSpaceshipsPromises);
        dispatch(setSpaceships([...spaceships, ...fetchedSpaceships])); // Merge new spaceships with existing ones
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, character]);

  const movieNames = character?.films.map((filmUrl) => {
    const movie = movies.find((film) => film.url === filmUrl);
    return movie.title;
  });
  const speciesNames = character?.species.length
    ? character.species.map((speciesUrl) => {
        const specie = species.find((type) => type.url === speciesUrl);
        return specie && specie.name ? specie.name : "none";
      })
    : ["none"];
  const characterSpaceships = character?.starships.length
    ? character.starships.map((spaceshipUrl) => {
        const spaceshipId = spaceshipUrl.split("/")[5];
        const spaceshipName = spaceships.find((ship) => ship.url === `https://swapi.dev/api/starships/${spaceshipId}/`);
        return spaceshipName && spaceshipName.name ? spaceshipName.name : "none";
      })
    : ["none"];
  const characterImageSrc = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <CharacterDetailsContainer>
          <CharacterImageContainer>
            <CharacterImage src={characterImageSrc} alt={character?.name} />
          </CharacterImageContainer>
          <CharacterDetailsContent>
            <h1>{character?.name}</h1>
            <ListTitle>Species:</ListTitle>
            <ListContainer>
              {speciesNames.map((specie, index) => (
                <ListItem key={index}>{`- ${specie}`}</ListItem>
              ))}
            </ListContainer>
            <ListTitle>Movies:</ListTitle>
            <ListContainer>
              {movieNames.map((movie, index) => (
                <ListItem key={index}>{`- ${movie}`}</ListItem>
              ))}
            </ListContainer>
            <ListTitle>Spaceships:</ListTitle>
            <ListContainer>
              {characterSpaceships.map((spaceship, index) => (
                <ListItem key={index}>{`- ${spaceship}`}</ListItem>
              ))}
            </ListContainer>
          </CharacterDetailsContent>
        </CharacterDetailsContainer>
      )}
    </>
  );
};

export default CharacterDetails;
