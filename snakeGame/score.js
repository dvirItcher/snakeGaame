import { score as scoreUpdate} from "./food.js";

let score;

export function update(){
    score=scoreUpdate;
}

export function draw(scoreBoard){
    const scoreElement=document.createElement('h2')
    scoreElement.innerHTML=`snake 1 score: ${score}`;
    scoreBoard.appendChild(scoreElement);

}