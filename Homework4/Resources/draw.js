var canvas = document.getElementById("tempgraph");
ctx = canvas.getContext("2d");

$.get("./Resources/temperature.json", function(d){
    for(var i = 0; i < d.length; i++){
    
        ctx.fillStyle = "black";
        ctx.fillRect(2, i*30,d[i].temp*4,25);
         ctx.fillStyle = "white";
        ctx.fillText(d[i].month,5,i*30+15);
        
          
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,370,440,5);
    
    for(var i = 0; i < 8; ++i){
        ctx.fillStyle="black";
        ctx.fillRect(i*55+2,370,2,10);
        ctx.fillStyle="white";
        ctx.fillText(i*55/4,i*55+2,390);
        
    }
    ctx.fillStyle="white";
    ctx.fillText("Mean temperature degrees Fahrenheit", 20,410)
});