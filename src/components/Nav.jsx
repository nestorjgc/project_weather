import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

// Paso a search
function Nav({ onSearch }) {
  return (
    <div className='nav-header'>
      <h3 className='title'>Weather App</h3>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
