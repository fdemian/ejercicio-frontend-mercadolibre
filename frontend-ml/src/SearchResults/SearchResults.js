import React from 'react';
import ResultBox from './ResultBox';
import './SearchResults.css';

const SearchResults = ({ products }) => {

 if(products === null || products === undefined || products.length === 0)
    return null;

  return(
  <div className="SearchResultsContainer">
    {products.map(p =>
      <div>
        <ResultBox product={p} />
        <hr />
      </div>
    )}
  </div>
  );

}

export default SearchResults;
