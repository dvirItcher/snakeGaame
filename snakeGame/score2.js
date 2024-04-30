import { score2 as scoreUpdate} from "./food.js";

let score;

export function update(){
    score=scoreUpdate;
}

export function draw(scoreBoard){
    const scoreElement=document.createElement('h2')
    scoreElement.innerHTML=`snake 2 score: ${score}`;
    scoreBoard.appendChild(scoreElement);

}