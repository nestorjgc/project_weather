import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

// Paso a search
function Nav({onSearch}) {
  return (
    <div className='nav-header'>
      <img src={Logo} alt='Img not found'/>
      <h3>Henry - Weather App</h3>
     <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
