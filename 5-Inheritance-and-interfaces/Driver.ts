import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape=new Shape(10, 15);

console.log(myShape.toString());

let myCircle=new Circle(5,10,15);
console.log(myCircle.toString());

let myRectangle = new Rectangle(0,2,5,10);
console.log(myRectangle.toString());