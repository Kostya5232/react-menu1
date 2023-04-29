import React, { useState } from 'react';
import { Menu, Calculator, Graph2D, Graph3D } from './components';

import './App.css';

const App = () => {
  const [showMenuItem, setShowMenuItem] = useState('graph3D');

  return (
    <div className="App">
      <Menu showMenuItem={setShowMenuItem} />
      {showMenuItem === 'calc' ?
        <Calculator /> :
        showMenuItem === 'graph2D' ?
          <Graph2D /> :
          showMenuItem === 'graph3D' ?
            <Graph3D /> : <></>
      }
    </div>
  );
};

export default App;
