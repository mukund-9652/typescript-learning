"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    toString() {
        return `Circle - ` + super.toString() + `, radius=${this._radius}, and area=${this.calculateArea()}`;
    }
}
exports.Circle = Circle;
