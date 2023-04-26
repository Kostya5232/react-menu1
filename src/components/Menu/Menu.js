const Menu = ({ showMenuItem }) => {
  return (
    <div className="menu">
      <button className="showMenuItem" onClick={() => showMenuItem('calc')}>
        Калькулятор
      </button>
      <button className="showMenuItem" onClick={() => showMenuItem('graph2D')}>
        2D График
      </button>
      <button className="showMenuItem" onClick={() => showMenuItem('graph3D')}>
        3D График
      </button>
    </div>
  );
};

export default Menu;
