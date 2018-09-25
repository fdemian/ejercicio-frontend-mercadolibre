import React from 'react';
import { Helmet } from "react-helmet";
import ResultBox from './ResultBox';
import './SearchResults.css';

const SearchResults = ({ products, searchValue, categories }) => {

 if(products === null || products === undefined || products.length === 0)
    return null;

  const keywords = categories.join(", ");
  const pageTitle = "Busqueda - " + searchValue;

  if(searchValue.trim() === "")
    return null;

  return(
  <div className="View">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <meta name="description" content={keywords} />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:type" content="Product search" />
      <meta name="og:image" content="https://http2.mlstatic.com/ui/navigation/4.0.8/mercadolibre/logo__large_plus@2x.png" />
      <meta name="og:url" content="http://mercadolibre.com.ar" />
    </Helmet>
    <div className="SearchResultsContainer">
      {products.map(p =>
        <div key={p.id}>
          <ResultBox product={p} />
          <hr />
        </div>
      )}
    </div>
  </div>
  );

}

export default SearchResults;
