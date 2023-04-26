import React, { useState } from 'react';
// prettier-ignore
import {Menu, CalculatorComponents, Graph2DComponent, Graph3DComponent } from './components';
import './App.css';

const App = () => {
  const [showMenuItem, setShowMenuItem] = useState('graph3D');

  return (
    <div className="App">
      <Menu showMenuItem={setShowMenuItem} />
      {showMenuItem === 'calc' ? (
        <CalculatorComponents />
      ) : showMenuItem === 'graph2D' ? (
        <div>
          <Graph2DComponent />
        </div>
      ) : showMenuItem === 'graph3D' ? (
        <Graph3DComponent />
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
