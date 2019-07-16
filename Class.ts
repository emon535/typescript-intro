class Point {
  x: number;
  y: number;

  constructor(x: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  doDraw() {
    //DrawFunction
    console.log("Cordinates are X:", this.x, "and Y is :", this.y);
  }

  getDistance2() {
    //getDistance
  }
}

let point: Point = new Point(100);

point.doDraw();
point.getDistance2;
