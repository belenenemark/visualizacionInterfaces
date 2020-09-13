"use strict"
//seteo canvas
let canvas= document.getElementById("canvas");
//seteo context
let ctx=canvas.getContext("2d");
let painting=document.getElementById("content");
let paintStyle=getComputedStyle(painting);
canvas.width=parseInt(paintStyle.getPropertyValue("width"));
canvas.height=parseInt(paintStyle.getPropertyValue("height"));
//ejercicio 1-hacer la cartuchera de paint
let lapiz= document.getElementById("lapiz").addEventListener('click',draw);
let goma= document.getElementById("goma").addEventListener('click',clean);
//dibujar en el lienzo
function draw(){
    let color='#ff0000';
    general(color);  

}
function clean(){
    let color="#FFFFFF";
    general(color);

}

function general(color){
    let mouse={x:0,y:0};
    //capturo la posicion del mouse
    canvas.addEventListener('mousemove',function(e){
        mouse.x=e.pageX-this.offsetLeft;
        mouse.y=e.pageY-this.offsetTop;     
    },false);
    
    //definicion del lapiz para dibujar
    ctx.lineWidth=3;
    ctx.lineJoin='round';
    ctx.lineCap='round';
    ctx.strokeStyle=color;
    //accion para que empiece a dibujar
    canvas.addEventListener('mousedown',function(e){
        ctx.beginPath();
        ctx.moveTo(mouse.x,mouse.y);
        canvas.addEventListener('mousemove',onPaint,false);
    },false);
    //accion para que deje de dibujar
    canvas.addEventListener('mouseup',function(){
        canvas.removeEventListener('mousemove',onPaint,false);
    
    },false);
    //genera la linea mientras va dibujando 
    let onPaint=function(){
        ctx.lineTo(mouse.x,mouse.y);
        ctx.stroke();
    };

}
//borrar en el lienzo 



