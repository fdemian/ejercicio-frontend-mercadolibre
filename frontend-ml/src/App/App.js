import React from 'react';
import Navbar from '../Navbar/Container';
import './App.css';

const App = ({children}) => {

  return (
  <div>
    <Navbar />
    <div>
      {children}
    </div>
  </div>
  );
}

export default App;
