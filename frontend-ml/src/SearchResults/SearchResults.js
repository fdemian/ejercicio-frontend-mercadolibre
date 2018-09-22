import React from 'react';
import 'SearchResults.css';

const results = [
  {
    name: "Resultado 1"
  },
  {
    name: "Celular"
  },
  {
    name: "Carpeta"
  }
];

const SearchResults = () => {
    return(
    <div>
      <div className="SearchResultsContainer">
        {results.map(r =>{
          <div>
            <p>{r.name}</p>
          </div>
        })}
      </div>
    </div>
    );
}

export default SearchResults;
