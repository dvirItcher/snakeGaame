

let inputDirection ={x:0,y:0};
let inputDirection2 ={x:0,y:0};
let openInput=true;
let openInput2=true;


export function openInputInfo(){
    openInput=true;
}
export function openInputInfo2(){
    openInput2=true;
}


window.addEventListener('keydown',e=>{
    if(openInput){
    switch(e.key) {
        case 'ArrowUp':
            if(inputDirection.y==1)break
            inputDirection={x:0,y:-1}; 
            openInput=false;
            break;
        case 'ArrowDown':
            if(inputDirection.y==-1)break
            inputDirection={x:0,y:1};
            openInput=false;
            break;
        case 'ArrowLeft':
            if(inputDirection.x==1)break
            inputDirection={x:-1,y:0};
            openInput=false;
            break;
        case 'ArrowRight':
            if(inputDirection.x==-1)break
            inputDirection={x:1,y:0};
            openInput=false;
            break;    
        }
        // console.log(inputDirection);
    }
})



export function getInputDirection(){
    return inputDirection;
}



window.addEventListener('keydown', e=>{
    if(openInput2){
    switch(e.code) {
        case 'KeyW':
            if(inputDirection2.y==1)break
            inputDirection2={x:0,y:-1};
            openInput2=false;         
            break;
        case 'KeyS':
            if(inputDirection2.y==-1)break
            inputDirection2={x:0,y:1}; 
            openInput2=false;           
            break;
        case 'KeyA':
            if(inputDirection2.x==1)break
            inputDirection2={x:-1,y:0}; 
            openInput2=false;         
            break;
        case 'KeyD':
            if(inputDirection2.x==-1)break
            inputDirection2={x:1,y:0};
            openInput2=false;        
            break;    
        }
    // console.log(inputDirection2);
    }   
})




export function getInputDirection2(){
    return inputDirection2;
}

