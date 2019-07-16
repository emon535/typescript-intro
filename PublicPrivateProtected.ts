// Public and Private are most common
// By default all are public

export class OtherClass {
  constructor(private _x: number, private _y?: number) {}
  doDraw() {
    console.log("Cordinates are X:", this._x, "and Y is :", this._y);
  }

  getDistance2() {
    //getDistance
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) throw new Error("Value can not be zero");
    this._x = value;
  }
}

let otherObject: OtherClass = new OtherClass(100);

let x = otherObject.x;
otherObject.x = -1;
