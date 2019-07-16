// Public and Private are most common
// By default all are public

class OtherClass {
  constructor(private x: number, private y?: number) {}
  doDraw() {
    console.log("Cordinates are X:", this.x, "and Y is :", this.y);
  }

  getDistance2() {
    //getDistance
  }

  get X() {
    return this.x;
  }

  set X(value) {
    if (value < 0) throw new Error("Value can not be zero");
    this.x = value;
  }
}

let otherObject: OtherClass = new OtherClass(100);

let x = otherObject.X;
otherObject.X = 10;
point.doDraw();

