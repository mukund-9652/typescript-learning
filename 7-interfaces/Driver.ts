  import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let theCoacher: Coach[] = [new CricketCoach(), new GolfCoach()];

for(let i of theCoacher){
    console.log(i.getDailyWorkout());
}