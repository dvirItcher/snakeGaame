import { draw as drawSnake, update as updateSnake,snakeSpeed ,headSnake,snakeIntersection, snakeOnSnakeIntersection} from "./snake.js";
import { draw as drawSnake2, update as updateSnake2,snakeSpeed as snakeSpeed2,headSnake as headSnake2,snakeIntersection as snakeIntersection2, snakeOnSnakeIntersection as snakeOnSnakeIntersection2} from "./snake2.js";
import { draw as foodDraw ,update as updateFood} from "./food.js";
import { outsideGrid } from "./grid.js";
import {  openInputInfo2, openInputInfo } from "./input.js";
import { draw as drawScore,update as updateScore } from "./score.js";
import { draw as drawScore2,update as updateScore2 } from "./score2.js";

let lastRenderTime=0;
let lastRenderTime2=0;
const gameBoard=document.getElementById('gameBoard');
const scoreBoard=document.getElementById("scoreBoard");
const scoreBoard2=document.getElementById("scoreBoard2");
let gameOver=false;
let gameOver2=false;


function main(currentTime){  
    if(gameOver||gameOver2){
        if(confirm("u lost press OK 2 restart"))location.reload();
        return
    }
    window.requestAnimationFrame(main);
    const secFromLastRender=(currentTime-lastRenderTime)/1000;
    const secFromLastRender2=(currentTime-lastRenderTime2)/1000;
    if(secFromLastRender2>1/snakeSpeed2){
        openInputInfo2();
        updateSnake2();
        updateScore2();
        draw();
        lastRenderTime2=currentTime;
        console.log(secFromLastRender2)
    }
    if(secFromLastRender<1/snakeSpeed){return}
    openInputInfo();
    lastRenderTime=currentTime;
    console.log(secFromLastRender);
    update();
    draw();
}


window.requestAnimationFrame(main);


function update(){
    updateSnake();
    updateFood();
    checkDeath();
    updateScore();
}

function draw(){
    gameBoard.innerHTML="";
    scoreBoard.innerHTML="";
    scoreBoard2.innerHTML="";
    drawSnake(gameBoard);
    drawSnake2(gameBoard);
    foodDraw(gameBoard);
    drawScore(scoreBoard);
    drawScore2(scoreBoard2);
}

function checkDeath(){
    gameOver=outsideGrid(headSnake())||snakeIntersection()||snakeOnSnakeIntersection()
    gameOver2=outsideGrid(headSnake2())||snakeIntersection2()||snakeOnSnakeIntersection2()
}





// function main(a){
//     window.requestAnimationFrame(main)
//     console.log(a);
// }

// window.requestAnimationFrame(main)

