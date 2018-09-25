import React from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../Navbar/Container';
import BreadCrumb from '../Breadcrumb/Container';
import './App.css';

const App = ({children}) => {

  return (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Mercado Libre</title>
    </Helmet>
    <Navbar />
    <BreadCrumb />
    <div className="ViewContainer">
      {children}
    </div>
  </div>
  );
}

export default App;
