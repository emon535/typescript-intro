var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.doDraw = function () {
        //DrawFunction
        console.log("Cordinates are X:", this.x, "and Y is :", this.y);
    };
    Point.prototype.getDistance2 = function () {
        //getDistance
    };
    return Point;
}());
var point = new Point();
point.doDraw();
point.getDistance2;
