import React from 'react';
import Menu from './components/Menu/Menu';
import CalculatorComponents from './components/calculator';
import Graph2DComponent from './components/Graph2D/Graph2DComponent';
import Graph3DComponent from './components/Graph3D/Graph3DComponent';
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
        ) : (
          //  : this.state.showMenuItem === 'graph2D' ? (
          //   <Graph2DComponent />
          // ) : this.state.showMenuItem === 'graph3D' ? (
          //   <Graph3DComponent />
          // )
          <></>
        )}
      </div>
    );
  }
}

export default App;
