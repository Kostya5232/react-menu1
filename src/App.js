import React from 'react';
// prettier-ignore
import {Menu, CalculatorComponents, Graph2DComponent, Graph3DComponent } from './components';
import UIComponent from './components/Graph2D/UI/UIComponent';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showMenuItem: 'calc' };
    this.state = { showMenuItem: 'graph2D' };
    this.state = { showMenuItem: 'graph3D' };
  }

  showMenuItem(name) {
    this.setState({ showMenuItem: name });
  }

  render() {
    return (
      <div className="App">
        <Menu showMenuItem={(name) => this.showMenuItem(name)} />
        {this.state.showMenuItem === 'calc' ? (
          <CalculatorComponents />
        ) : this.state.showMenuItem === 'graph2D' ? (
          <div>
            <Graph2DComponent />
            <UIComponent />
          </div>
        ) : this.state.showMenuItem === 'graph3D' ? (
          <Graph3DComponent />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
