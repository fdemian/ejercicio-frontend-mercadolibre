import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from '../SearchResults/Container';

const Home = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Mercado Libre - Home</title>
    </Helmet>
    <SearchResults />
  </div>
);

export default Home;
