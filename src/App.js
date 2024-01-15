import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";
import styled from "styled-components";
const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters/:characterId" element={<CharacterDetails />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
