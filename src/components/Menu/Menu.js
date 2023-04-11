import React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.showMenuItem = props.showMenuItem;
  }

  render() {
    return (
      <div className="menu">
        <button onClick={() => this.showMenuItem('calc')}>Калькулятор</button>
        <button onClick={() => this.showMenuItem('graph2D')}>2D График</button>
        <button onClick={() => this.showMenuItem('graph3D')}>3D График</button>
      </div>
    );
  }
}
