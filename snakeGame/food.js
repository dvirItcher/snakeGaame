import { onSnake,expendSnake } from "./snake.js";
import { onSnake as onSnake2,expendSnake as expendSnake2} from "./snake2.js";
import { rndGrigPosition } from "./grid.js";


export let score=0;
export let score2=0;
let food =getRndFoodPOsition()
// let food ={x:31,y:30}
let expendRate=5;
const foodItemsArray = [
  "🐁",
  "🍇",
  "🍉",
  "🍈",
  "🍓",
  "🍍",
  "🍌",
  "🥝",
  "🍏",
  "🍎",
  "🍔",
  "🍅",
  "🥚",
];
let foodType=rndFoodType();

export function update(){
    if(onSnake(food)){
        expendSnake(expendRate)
        food=getRndFoodPOsition()
        foodType=rndFoodType()
        score++;
    }
    if(onSnake2(food)){
        expendSnake2(expendRate);
        food=getRndFoodPOsition()
        foodType=rndFoodType()
        score2++;
    }
}

export function draw(gameBoard){
    const foodElement=document.createElement('div')
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food')
    foodElement.innerHTML=foodItemsArray[foodType];
    gameBoard.appendChild(foodElement)
    
}

function getRndFoodPOsition(){
    let newFoodPosition
    while (newFoodPosition==null||onSnake(newFoodPosition)||onSnake2(newFoodPosition)) {
        newFoodPosition=rndGrigPosition();
    }return newFoodPosition;
}

function rndFoodType(){
    return Math.floor(Math.random()*foodItemsArray.length)
}