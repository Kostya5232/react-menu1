import React from 'react';

export default class Graph3DUI extends React.Component {
  constructor(props) {
    super(props);

    this.showHidePoints = props.showHidePoints;
    this.showHideEdges = props.showHideEdges;
    this.showHidePolygons = props.showHidePolygons;

    this.state = { showPanel: false };
  }

  showHidePanel() {
    this.setState({ showPanel: !this.state.showPanel });
  }

  render() {
    return (
      <div className="flex">
        <button onClick={() => this.showHidePanel()}>{this.state.showPanel ? '🔙' : '🔜'}</button>
        <div id="Checkbox3D">
          {this.state.showPanel && (
            <div>
              <input
                id="points-checkbox"
                type="checkbox"
                onClick={(event) => this.showHidePoints(event.target.checked)}
                defaultChecked
              ></input>
              <label htmlFor="points-checkbox">Точки</label>
            </div>
          )}
          {this.state.showPanel && (
            <div>
              <input
                id="edges-checkbox"
                type="checkbox"
                onClick={(event) => this.showHideEdges(event.target.checked)}
                defaultChecked
              ></input>
              <label htmlFor="edges-checkbox">Грани</label>
            </div>
          )}
          {this.state.showPanel && (
            <div>
              <input
                id="polygons-checkbox"
                type="checkbox"
                onClick={(event) => this.showHidePolygons(event.target.checked)}
                defaultChecked
              ></input>
              <label htmlFor="polygons-checkbox">Грани</label>
            </div>
          )}
        </div>
      </div>
    );
  }
}
