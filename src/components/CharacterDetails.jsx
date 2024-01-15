import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { characterId } = useParams();
  // const { id } = useParams(); // Use useParams to access route parameters
  // console.log("id", id);
  console.log("characterId", characterId);
  const characters = useSelector((state) => state.characters);
  console.log("first", characters);
  const character = characters.find((char) => char.url.includes(`/${characterId}/`));
  console.log("character", character);
  return (
    <div>
      <h1>{character.name} Details</h1>
      <p>Species: {character.species}</p>
      <p>Movies: {character.films.join(", ")}</p>
      <p>Spaceships: {character.starships.join(", ")}</p>
    </div>
  );
};

export default CharacterDetails;
