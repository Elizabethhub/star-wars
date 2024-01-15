import React from "react";
import { CardContainer, CharacterImage, CharacterName } from "./CharacterCardStyled";

export default function CharacterCard({ character }) {
  return (
    <CardContainer>
      <CharacterName>{character.name}</CharacterName>
      <CharacterImage
        src={`https://starwars-visualguide.com/assets/img/characters/${character.url.split("/").slice(-2, -1)}.jpg`}
        alt={character.name}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </CardContainer>
  );
}
