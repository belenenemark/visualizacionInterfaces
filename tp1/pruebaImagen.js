"use strict";
let ctx= document.getElementById("canvas").getContext("2d");
let ctxgray=document.getElementById("canvas1").getContext("2d");
let width=document.getElementById("canvas").width;
let height=document.getElementById("canvas").height;
let r=255;
let g=255;
let b=0;
let a=255;
//function myDrawImageMetod

//cargado de la imagen 
var imagen1= new Image();
imagen1.src="flag.jpg";
imagen1.onload=function(){
    ctx.drawImage(imagen1,0,0);
    ctxgray.drawImage(imagen1,0,0);
    grayColor(ctxgray);
}
// dibujando la imagen a gris
function grayColor(context) {
    var imgData = context.getImageData(0, 0, width, height);
        var pixels  = imgData.data;
        for (var i = 0, n = pixels.length; i < n; i += 4) {
        var grayscale = pixels[i] * .3 + pixels[i+1] * .59 + pixels[i+2] * .11;
        pixels[i  ] = grayscale;        
        pixels[i+1] = grayscale;        
        pixels[i+2] = grayscale;        
      
    }
   
    context.putImageData(imgData, 0, 0);
  }
