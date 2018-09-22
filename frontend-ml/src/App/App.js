import React from 'react';
import Navbar from '../Navbar/Navbar';

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
