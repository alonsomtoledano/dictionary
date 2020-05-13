import React, { useState } from "react";
import './App.css';
import Body from "./components/Body";
import SearchBar from "./components/SearchBar";
import AppContext from "./AppContext";

function App() {
  const [word, setWord] = useState(null);

  const contextData = {
    word: { get: word, set: setWord },
  }

  return (
    <AppContext.Provider value={contextData}>
      <SearchBar />
      <Body />
    </AppContext.Provider>
  );
}

export default App;