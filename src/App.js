import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Characters from "./components/hero-list/Characters";
import CharacterDetails from "./components/hero-details/CharacterDetails";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
