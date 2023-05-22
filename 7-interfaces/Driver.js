"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let theCoacher = [new CricketCoach_1.CricketCoach(), new GolfCoach_1.GolfCoach()];
for (let i of theCoacher) {
    console.log(i.getDailyWorkout());
}
