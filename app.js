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
point.x = 10;
point.getDistance2;
var mylog = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var doLogwithEmpty = function () { return console.log(message); };
var drawPoint = function (point) {
    //draw
};
drawPoint({
    x: 1,
    y: 23
});
var drawPointwithInterface = function (point) {
    //DrawPointerWithInterface
};
var getDistance = function (pointA, pointB) {
    //DrawPointerWithInterface
};
function log(message) {
    console.log(message);
}
var message = "Hello TypeScript";
log(message);
function doSometion() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally", i);
}
doSometion();
var neNumber;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5, 6];
var f = [1, "true", "a", false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Green;
var newMessage = "abc";
message.endsWith("c");
var ebdsWith = message.endsWith("c");
var yetAnother = message.endsWith("c");
