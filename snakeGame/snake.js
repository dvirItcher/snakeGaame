import { getInputDirection } from "./input.js";
import { headSnake as headSnake2 } from "./snake2.js";

export let snakeSpeed=2;
export const snakeBody =[{x:31,y:31}];
let newSegments=0;

export function update(){
    const inputDirection=getInputDirection();
    addSegments();

    for(let i=snakeBody.length-2;i>=0;i--){
        snakeBody[i+1]={...snakeBody[i]};
    }        
   snakeBody[0].x+=inputDirection.x;
   snakeBody[0].y+=inputDirection.y;

}

export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement=document.createElement('div')
        if(segment==headSnake()){
            snakeElement.style.background="skyblue";
        }      
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
        // console.log(snakeBody)
    })
}

export function onSnake(position,{ignorHead=false}={}){
    return snakeBody.some((segment,index)=>{
        if(ignorHead&& index===0)return false;
        return equalPosition(segment,position)
    })
}

function equalPosition(segment,position){
    return segment.x===position.x&&segment.y===position.y;
}

export function expendSnake(amunt){
    newSegments+=amunt;
}

function addSegments(){
    for(let i=0;i<newSegments;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegments=0;
}


export function headSnake(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return onSnake(snakeBody[0],{ignorHead:true})
}

export function snakeOnSnakeIntersection(){
    return onSnake(headSnake2(),{ignorHead:true})
}

