import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  text-align: center;
`;

export const CharacterImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 5px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const CharacterName = styled.h3`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0; /* Remove any default margins to prevent spacing issues */
`;
