import styled from "styled-components";

export const CharacterDetailsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;
export const CharacterImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const CharacterImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const CharacterDetailsContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ListTitle = styled.h3`
  margin: 12px 0 8px 0;
  font-weight: bold;
`;

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 6px;
`;
