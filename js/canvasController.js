function draw(){
    var canvasElement = document.getElementById("TestCanvas");
    var ctx = canvasElement.getContext("2d");
    axes(ctx);
    grid(ctx);
    node(ctx);
    nerve(ctx);
}

function axes(ctx){
    ctx.beginPath();
    ctx.moveTo(0,20);
    ctx.lineTo(490,20);
    ctx.moveTo(485,15);
    ctx.lineTo(490,20);
    ctx.lineTo(485,25);

    ctx.moveTo(20,0);
    ctx.lineTo(20,490);
    ctx.moveTo(15,485);
    ctx.lineTo(20,490);
    ctx.lineTo(25,485);

    ctx.strokeStyle="#000";
    ctx.stroke();
    ctx.closePath();
}

function grid(ctx){
    for(y=0.5;y<=500;y+=10){
        ctx.moveTo(0,y);
        ctx.lineTo(500,y);
    }
    for(x=0.5;x<=500;x+=10){
        ctx.moveTo(x,0);
        ctx.lineTo(x,500);
    }
    ctx.strokeStyle="#eee";
    ctx.stroke();
}

function node(ctx){
    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.quadraticCurveTo(75,30,100,50);
    ctx.quadraticCurveTo(125,75,100,100);
    ctx.quadraticCurveTo(75,125,50,100);
    ctx.quadraticCurveTo(30,75,50,50);
    ctx.strokeStyle="#000";
    ctx.stroke();
    ctx.closePath();
}

var startPointX =108;
var startPointY =60;

var endPointX =250;
var endPointY =40;

var cp1X=startPointX + (endPointX-startPointX)/4;
var cp1Y=startPointY-50;

var cp2X=startPointX +(endPointX-startPointX)/4 ;
var cp2Y=startPointY+50;



function nerve(ctx){
    ctx.beginPath();
    ctx.moveTo(startPointX,startPointY);
    ctx.bezierCurveTo(cp1X,cp1Y,cp2X,cp2Y,endPointX,endPointY);
    ctx.bezierCurveTo(cp2X,cp2Y,cp1X,cp1Y,110,85);
    ctx.quadraticCurveTo(115,75,startPointX,startPointY);
    ctx.fill();
    ctx.closePath();
}

$(document).ready(function(){
    draw();
});