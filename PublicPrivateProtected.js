"use strict";
// Public and Private are most common
// By default all are public
exports.__esModule = true;
var OtherClass = /** @class */ (function () {
    function OtherClass(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    OtherClass.prototype.doDraw = function () {
        console.log("Cordinates are X:", this._x, "and Y is :", this._y);
    };
    OtherClass.prototype.getDistance2 = function () {
        //getDistance
    };
    Object.defineProperty(OtherClass.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value can not be zero");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return OtherClass;
}());
exports.OtherClass = OtherClass;
var otherObject = new OtherClass(100);
var x = otherObject.x;
otherObject.x = -1;
