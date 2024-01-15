import styled from "styled-components";

export const CharacterListContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  background-color: #83cbe8;
  padding: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const CharacterListItem = styled.ul`
  display: grid;
  /* max-width: calc(100vw - 48px); */
  grid-template-columns: repeat(5, minmax(0, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); */
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #0366d6;
    }
  }
`;
