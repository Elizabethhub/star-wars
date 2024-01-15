import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Characters from "./components/hero-list/Characters";
import CharacterDetails from "./components/hero-details/CharacterDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
