import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle=new Circle(5,10,15);
let myRectangle = new Rectangle(0,2,5,10);

let theShapes: Shape[] = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let shape of theShapes){
    console.log(shape.toString());
}