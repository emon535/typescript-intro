var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
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
var point = new Point(100);
point.doDraw();
point.getDistance2;
