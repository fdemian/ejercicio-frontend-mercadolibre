import React from 'react';
import { Link } from 'react-router-dom';
import logoML from '../assets/Logo_ML.png';
import logoSearch from '../assets/ic_Search.png';
import './Navbar.css';

function handleKeyPress(key, searchFn){
  if (key === 'Enter') {
     searchFn();
   }
}

const Navbar = ({ searchFn, changeInput, resetCategories }) => {
    return(
    <div className="NavbarContainer">
     <div>
      <Link to="/" onClick={resetCategories}>
        <img src={logoML} alt="Mercado Libre" className="LogoML" />
      </Link>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        className="SearchInput"
        onKeyPress={(e) => handleKeyPress(e.key, searchFn)}
        onChange={(e) => changeInput(e.target.value)}
      />
      <button
         type="button"
         className="SearchButton"
         onClick={() => searchFn()}
      >
        <img src={logoSearch} alt="Busqueda" className="SearchLogo" />
      </button>
     </div>
    </div>
    );
}

export default Navbar;
