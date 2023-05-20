import Point from './Point';

class Figure {
  constructor(points = [], edges = [], polygons = [],animations='', center = new Point()) {
    this.points = points;
    this.edges = edges;
    this.polygons = polygons;
    this.center = center;
    
    this.animations = this.setAnimation(animations);
  }
  // {method:'rotateOx',value: 0.01,center}
  dropAnimation() {
    this.animations = [];
  }

  setAnimation(animation) {
    let anim = []
        let str = animation.split(",");
        const c = [];
        str.forEach((elem) => {
            c.push(elem.split(" ").filter((el) => el !== ""));
        });
        str = c;
        str.forEach((elem) => {
            if ((elem[0] === "rotateOx" || elem[0] === "rotateOy" || elem[0] === "rotateOz") && !isNaN(elem[1]) && elem.length === 2) {
              anim.push({method: elem[0], value:elem[1]-0, center:new Point()})

            }
        });
        return anim
  }
  
  doAnimation(math3D) {
    this.animations.forEach((anim) => {
      const T2 = math3D.getTransformMatrix(math3D[anim.method](anim.value));
      const T1 = math3D.getTransformMatrix(
        math3D.move(-anim.center.x, -anim.center.y, -anim.center.z)
      );
      const T3 = math3D.getTransformMatrix(
        math3D.move(anim.center.x, anim.center.y, anim.center.z)
      );

      const matrix = math3D.getTransformMatrix(T1, T2, T3);

      this.points.forEach((point) => {
        math3D.transform(matrix, point);
        math3D.transform(matrix, this.center);
      });
    });
  }
}

export default Figure;
