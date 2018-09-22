import React from 'react';
import logoML from '../assets/Logo_ML.png';
import logoSearch from '../assets/ic_Search.png';
import './Navbar.css';

const Navbar = () => {
    return(
    <div className="NavbarContainer">
     <div>
      <img src={logoML} alt="Mercado Libre" className="LogoML" />
      <input type="text" placeholder="Nunca dejes de buscar" className="SearchInput"/>
      <button type="button" className="SearchButton">
        <img src={logoSearch} alt="Busqueda" className="SearchLogo" />
      </button>
     </div>
    </div>
    );
}

export default Navbar;
