"use strict";
let ctx= document.getElementById("canvas").getContext("2d");
let width=document.getElementById("canvas").width;
let height=document.getElementById("canvas").height;
let r=0;
let g=0;
let b=0;
let a=255;

let imageData=ctx.createImageData(width,height);
for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
        setPixel(imageData,x,y,r,g,b,a);
        
        
    }  
}
ctx.putImageData(imageData,0,0);
function setPixel(imageData,x,y,r,g,b,a) {
  let  index=(x+y*imageData.width)*4;
    imageData.data[index+0]=r;
    imageData.data[index+1]=g;
    imageData.data[index+2]=b;
    imageData.data[index+3]=a;
    
}
