import React from 'react';
import Math3D, { Point, Light, Sphere } from '../../modules/Math3D';
import Canvas from '../../modules/Canvas/Canvas';
import ParamsComponent from './ParamsComponent';
import Graph3DUI from './Graph3DUI';

window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callbacks) {
      window.setTimeout(callbacks, 1000, 160);
    }
  );
})();

class Graph3DComponent extends React.Component {
  constructor(props) {
    super(props);
    this.WIN = {
      LEFT: -5,
      BOTTOM: -5,
      WIDTH: 10,
      HEIGHT: 10,
      FOCUS: new Point(0, 0, 30),
      CAMERA: new Point(0, 0, 40),
    };
    this.canRotate = false;

    this.LIGHT = new Light(-30, 30, 10, 30000);
    this.scene = [new Sphere(), new Sphere(3, 20, '#ffff00', -15, 12, -7)];

    this.pointsCheckbox = true;
    this.edgesCheckbox = true;
    this.polygonsCheckbox = true;
    this.lumenCheckbox = true;
    this.oneFigurCheckbox = false;
    this.animationCheckbox = true;

    this.showPoints = false;
    this.showEdges = false;
    this.showPolygons = true;

    this.math3D = new Math3D({
      WIN: this.WIN,
    });

    this.FPS = 0;
    //this.componentDidMount();
  }

  showHidePoints(value) {
    this.showPoints = value;
  }

  render() {
    //prettier-ignore
    return (
      <div className="canvas3DContain">
        <div className="canvas3D">
          <Graph3DUI showHidePoints = {(value) => this.showHidePoints(value)}></Graph3DUI>
          <canvas id="canvas3D"></canvas>
        </div>

        <div className="selectFigur" id="selectFigur">
          <select id="figures">
            <option className="figur" value="void">Фигуры</option>
            <option className="figur" value="Cube">Куб</option>
            <option className="figur" value="Sphere">Сфера</option>
            <option className="figur" value="Cone">Конус</option>
            <option className="figur" value="Ellipsiloid">Элипсоид</option>
            <option className="figur" value="Tor">Тор</option>
            <option className="figur" value="HyperbolicParaboloid">Седло</option>
            <option className="figur" value="Cylinder">Цилиндр</option>
            <option className="figur" value="OneWayHyperboloid">Однополосый гиперболоид</option>
            <option className="figur" value="TwoWayHyperboloid">Двухполосый гиперболоид</option>
            <option className="figur" value="EllipticalParabaloid">Эллиптический гиперболоид</option>
            <option className="figur" value="ParabalidCylinder">Параболический цилиндр</option>
            <option className="figur" value="HyperbolicCylinder">Гипербалический цилиндр</option>
            <option className="figur" value="SolarSystem">Солнечная система</option>
          </select>
          <input type="checkbox" className="checkboxGraph" value='pointsCheckbox' defaultChecked></input>
          <span className="pointsTrue">Точки</span>
          <input type="checkbox" className="checkboxGraph" value = 'edgesCheckbox' defaultChecked></input>
          <span className="edgesTrue">Грани</span>
          <input type="checkbox" className="checkboxGraph" value = 'polygonsCheckbox' defaultChecked></input>
          <span className="polygonsTrue">Полигоны</span>
          <input type="checkbox" className="checkboxGraph" value = 'lumenCheckbox' defaultChecked></input>
          <span className="lumenTrue">Свет</span>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.canvas = new Canvas({
      WIN: this.WIN,
      id: 'canvas3D',
      width: 600,
      height: 600,
      callbacks: {
        wheel: (event) => this.wheel(event),
        mouseMove: (event) => this.mouseMove(event),
        mouseUp: () => this.mouseUp(),
        mouseDown: () => this.mouseDown(),
      },
    });

    this.ParamsComponent = new ParamsComponent({
      id: 'ParamsComponent',
      parent: this.id,
      callbacks: {
        applyParam: (scene, i) => this.applyParam(scene),
        DelParam: (i) => this.DelParam(i),
        checkbox: (name) => this.checkbox(name),
      },
    });

    let FPS = 0;
    let lastTimestamp = Date.now();

    const animLoop = () => {
      FPS++;
      const timestamp = Date.now();
      if (timestamp - lastTimestamp >= 1000) {
        this.FPS = FPS;
        FPS = 0;
        lastTimestamp = timestamp;
      }
      window.requestAnimFrame(animLoop);
      this.scene.forEach((elem) => elem.doAnimation(this.math3D));

      this.renderScene();
    };
    this.request = window.requestAnimationFrame(animLoop);
    this.interval = setInterval(() => {
      this.scene.forEach((figure) => figure.doAnimation(this.math3D));
    }, 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.cancelAnimationFrame(this.request);
    this.canvas = null;
  }

  checkbox(name) {
    this[name] = !this[name];
  }
  applyParam(scene) {
    this.scene = scene;
  }

  wheel(event) {
    const delta = event.wheelDelta > 0 ? 1 : -1;
    this.WIN.CAMERA.z += delta;
    this.WIN.FOCUS.z += delta;
  }

  mouseUp() {
    this.canRotate = false;
  }
  mouseDown() {
    this.canRotate = true;
  }
  mouseMove(event) {
    if (this.canRotate) {
      this.scene.forEach((elem) =>
        elem.points.forEach((point) => {
          const { movementX, movementY } = event;
          this.math3D.transform(this.math3D.rotateOy(movementX / 180), point);
          this.math3D.transform(this.math3D.rotateOx(movementY / 180), point);
        })
      );
    }
  }

  renderScene() {
    this.canvas.clear();
    if (this.polygonsCheckbox) {
      const polygons = [];
      this.scene.forEach((figure, index) => {
        this.math3D.calcCenter(figure);
        this.math3D.calcRadius(figure);
        this.math3D.calcDisctance(figure, this.WIN.CAMERA, 'distance');
        this.math3D.calcDisctance(figure, this.LIGHT, 'lumen');
        figure.polygons.forEach((polygon) => {
          polygon.figureIndex = index;
          polygons.push(polygon);
        });
      });
      this.math3D.sortByArtistAlgorithm(polygons);
      polygons.forEach((polygon) => {
        const figure = this.scene[polygon.figureIndex];
        const points = [
          figure.points[polygon.points[0]],
          figure.points[polygon.points[1]],
          figure.points[polygon.points[2]],
          figure.points[polygon.points[3]],
        ];
        let { r, g, b } = polygon.color;
        const { isShadow, dark } = this.math3D.calcShadow(polygon, this.scene, this.LIGHT);
        let lumen = this.math3D.calcIllumination(polygon.lumen, this.LIGHT.lumen * (isShadow ? dark : 1));
        r = Math.round(r * lumen);
        g = Math.round(g * lumen);
        b = Math.round(b * lumen);
        this.canvas.polygon(
          points.map((point) => {
            return {
              x: this.math3D.xs(point),
              y: this.math3D.ys(point),
            };
          }),
          polygon.rgbToHex(r, g, b)
        );
      });
    }
    if (this.edgesCheckbox) {
      this.scene.forEach((elem) =>
        elem.edges.forEach((edge) => {
          const point1 = elem.points[edge.p1];
          const point2 = elem.points[edge.p2];
          this.canvas.line(
            this.math3D.xs(point1),
            this.math3D.ys(point1),
            this.math3D.xs(point2),
            this.math3D.ys(point2)
          );
        })
      );
    }
    if (this.pointsCheckbox) {
      this.scene.forEach((elem) =>
        elem.points.forEach((point) => {
          this.canvas.point(this.math3D.xs(point), this.math3D.ys(point));
        })
      );
    }
    this.canvas.text(`FPS:${this.FPS}`, -4, 4);
  }
}

export default Graph3DComponent;
