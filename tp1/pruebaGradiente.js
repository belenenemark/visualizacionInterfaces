"use strict";
let ctx= document.getElementById("canvas").getContext("2d");
let width=document.getElementById("canvas").width;
let height=document.getElementById("canvas").height;
let r=0;
let g=0;
let b=0;
let a=255;

let imageData=ctx.createImageData(height,width);
for (let x = 0; x < height; x++) {
    let color=x/(height-1)*255;
    for (let y = 0; y < width; y++) {
        setPixel(imageData,x,y,color,color,color,a);
        
        
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