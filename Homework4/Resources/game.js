var playing = false;
var indicator = 0;
var canvas = document.getElementById("game");
ctx = canvas.getContext("2d");

function getX(name){
    return window.localStorage.getItem(name);
}
function setX(name,value){
    window.localStorage.setItem(name, value);
}
function getY(name){
    return window.localStorage.getItem(name);
}
function setY(name,value){
    window.localStorage.setItem(name,value); 
}
function getScore(){
    return window.localStorage.getItem("score");
}
function setScore(value){
    window.localStorage.setItem("score", value);
}

function startGame(){

var playing = true;
setX("x",0);
setY("y",0);
setScore(0);

document.getElementById("play").disabled = true;
var canvas = document.getElementById("game");
setX("rand",canvas.width);
setY("rand",canvas.height);

ctx.fillStyle="white";
ctx.fillRect(getX("x"),getY("y"),20,20);

document.onkeypress = update;

    
setTimeout(endGame,60000);
setInterval(draw,60);
}


function update(e){
    var pressed = String.fromCharCode(e.keyCode);
   
    if(pressed == "a"){ //Left
        setX("x",parseInt(getX("x"))-5);   
    }
    else if(pressed == "w"){ //Up
       setY("y",parseInt(getY("y"))-5); 
    }
    else if(pressed == "d"){ //Right
        setX("x",parseInt(getX("x"))+5);
    }
    else if(pressed == "s"){ //Down
        setY("y",parseInt(getY("y"))+5);
      
    }
    else if(e.keyCode == 32){ // Spacebar send block randomly up,left,right,or down
        var rand = Math.floor(Math.random()*4);
        if(rand == 1){
        setX("x",parseInt(getX("x"))-20);    
        }
        else if(rand == 2){
        setY("y",parseInt(getY("y"))-20);  
        }
        else if(rand == 3){
        setX("x",parseInt(getX("x"))+20);   
        }
        else{
        setY("y",parseInt(getY("y"))+20);   
        }
    }
    
    
}

function draw(){
    indicator+=1;
    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillRect(getX("x"), getY("y"),20,20);
    ctx.fillRect(getX("rand"),getY("rand"),30,30);
    
    if(indicator%40 == 0){
        setScore(parseInt(getScore())+calcScore());
        score = parseInt(getScore());
        setX("rand",Math.random()*canvas.width);
        setY("rand", Math.random()*canvas.height);
         document.getElementById("score").innerHTML = "Score: " + score;
        
        
    }
}

function calcScore(){
    var a = parseInt(getX("x")) - parseInt(getX("rand"));
    var b = parseInt(getY("y")) - parseInt(getY("rand"));
    
    var distance = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    
    return Math.floor(300/distance);
}


function endGame(){
    window.alert("Game over!  Final score: " + score);
    location.reload();
}

