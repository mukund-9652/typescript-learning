import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(value: number) {
        this._radius = value;
    }

    toString(): string {
        return `Circle - `+super.toString()+`, radius=${this._radius}`;
    }
}