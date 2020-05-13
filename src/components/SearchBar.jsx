import React, { useState, useContext } from "react";
import AppContext from "../AppContext";

import "./styles.css";

const SearchBar = () => {
    const context = useContext(AppContext);

    const [word, setWord] = useState(null);

    const updateWordHere = event => {
        setWord(event.target.value);
    }

    return (
        <div className="SearchBar">
            <input className="Search" onChange={(event) => updateWordHere(event)}/>
            <div className="SearchButton" onClick={() => context.word.set(word)}>Search</div>
        </div>
    )
}

export default SearchBar;