import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { characterId } = useParams();
  const characters = useSelector((state) => state.characters);
  const movies = useSelector((state) => state.movies);
  const species = useSelector((state) => state.species);
  const spaceships = useSelector((state) => state.spaceships);
  console.log("spaceships", spaceships);
  const character = characters.find((char) => char.url.includes(`/${characterId}/`));
  console.log("character", character);
  const movieNames = character.films.map((filmUrl) => {
    const movie = movies.find((m) => m.url === filmUrl);
    return movie ? movie.title : "";
  });
  const speciesNames = character.species.map((speciesUrl) => {
    const specie = species.find((s) => s.url === speciesUrl);
    return specie ? specie.name : "";
  });
  const characterSpaceships = character.starships.map((spaceshipUrl) => {
    const spaceshipId = spaceshipUrl.split("/")[5];
    const spaceshipName = spaceships.find((ship) => ship.url === `https://swapi.dev/api/starships/${spaceshipId}/`);
    return spaceshipName.name || spaceshipUrl;
  });
  console.log("character", character);
  return (
    <div>
      <h1>{character.name} Details</h1>
      <p>Species: {speciesNames.join(", ")}</p>
      <p>Movies: {movieNames.join(", ")}</p>
      <p>Spaceships: {characterSpaceships.join(", ")}</p>
    </div>
  );
};

export default CharacterDetails;
