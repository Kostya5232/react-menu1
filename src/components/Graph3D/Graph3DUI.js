import { useState } from 'react';
import MyCheckbox from './MyCheckbox';

const Graph3DUI = ({ show, showHidePoints, showHideEdges, showHidePolygons }) => {
  const [showPanel, setShowPanel] = useState(false);

  const showHidePanel = () => setShowPanel(!showPanel);

  return (
    <div className="flex">
      <button onClick={showHidePanel}>{showPanel ? '🔙' : '🔜'}</button>
      <div id="Checkbox3D">
        {showPanel && (
          <div>
            <MyCheckbox text={'Точки'} checked={show.showPoints} onClick={showHidePoints} />
          </div>
        )}
        {showPanel && (
          <div>
            <MyCheckbox text={'Грани'} checked={show.showEdges} onClick={showHideEdges} />
          </div>
        )}
        {showPanel && (
          <div>
            <MyCheckbox text={'Полингоны'} checked={show.showPolygons} onClick={showHidePolygons} />
          </div>
        )}
        {/* {this.state.showPanel && (
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
          )} */}
      </div>
    </div>
  );
};

export default Graph3DUI;
