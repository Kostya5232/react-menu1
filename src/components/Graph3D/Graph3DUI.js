import { useState, useCallback } from 'react';
import MyCheckbox from './MyCheckbox';

const Graph3DUI = ({ show, showHidePoints, showHideEdges, showHidePolygons }) => {
  const [showPanel, setShowPanel] = useState(false);

  const showHidePanel = useCallback(() => {
    setShowPanel(!showPanel);
  }, [setShowPanel, showPanel]);

  return (
    <div className="flex">
      <button onClick={showHidePanel}>{showPanel ? '🔙' : '🔜'}</button>
      <div id="Checkbox3D">
        {showPanel && (
          <div>
            <MyCheckbox text={'Точки'} checked={true} onClick={showHidePoints} />
          </div>
        )}
        {showPanel && (
          <div>
            <MyCheckbox text={'Грани'} checked={true} onClick={showHideEdges} />
          </div>
        )}
        {showPanel && (
          <div>
            <MyCheckbox text={'Полингоны'} checked={true} onClick={showHidePolygons} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Graph3DUI;
