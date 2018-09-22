import React from 'react';
import Navbar from '../Navbar/Navbar';
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
