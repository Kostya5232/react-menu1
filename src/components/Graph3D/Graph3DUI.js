import React from 'react';

export default class Graph3DUI extends React.Component {
  constructor(props) {
    super(props);

    this.showHidePoints = props.showHidePoints;

    this.state = { showPanel: false };
  }

  showHidePanel() {
    this.setState({ showPanel: !this.state.showPanel });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.showHidePanel()}>{this.state.showPanel ? '<-' : '->'}</button>
        {this.state.showPanel && (
          <div>
            <input
              id="points-checkbox"
              type="checkbox"
              onClick={(event) => this.showHidePoints(event.target.checked)}
            ></input>
          </div>
        )}
        <label htmlFor="points-checkbox">Точки</label>
      </div>
    );
  }
}
