import React from "react";
import { CardContainer, CharacterImage, CharacterName } from "./CharacterCardStyled";

export default function CharacterCard({ character }) {
  return (
    <CardContainer>
      <CharacterName>{character.properties.name}</CharacterName>
      <CharacterImage
        src={`https://starwars-visualguide.com/assets/img/characters/${character.properties.url.split("/").pop()}.jpg`}
        alt={character.properties.name}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </CardContainer>
  );
}
