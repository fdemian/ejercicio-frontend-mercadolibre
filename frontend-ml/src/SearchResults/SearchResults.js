import React from 'react';
import ResultBox from './ResultBox';
import './SearchResults.css';

const SearchResults = ({ products }) => {

 if(products === null || products === undefined || products.length === 0)
    return null;

  return(
  <div className="SearchResultsContainer">
    {products.map(p => <ResultBox product={p} />)}
  </div>
  );

}

export default SearchResults;
