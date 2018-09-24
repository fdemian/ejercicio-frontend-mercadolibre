import React from 'react';
import Navbar from '../Navbar/Container';
import BreadCrumb from '../Breadcrumb/Container';
import './App.css';

const App = ({children}) => {

  return (
  <div>
    <Navbar />
    <BreadCrumb />
    <div className="ViewContainer">
      {children}
    </div>
  </div>
  );
}

export default App;
