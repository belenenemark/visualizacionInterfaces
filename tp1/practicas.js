"use strict";
let ctx= document.getElementById("canvas").getContext("2d");
let width=document.getElementById("canvas").width;
let height=document.getElementById("canvas").height;
let ctxgray=document.getElementById("canvas1").getContext("2d");
let removeClass= document.getElementById("canvas1");

let r=0;
let g=0;
let b=0;
let a=255;


//setea los pixeles




//resuelve ejercicio 2
function ej2(ctx){
 
  ctx.fillStyle= "red";
  let x=0;
  let y=0;
 ctx.fillRect(x,y,width,height);
 removeClass.classList.add("hidden");
}

function ej3(ctx){
  let imageData=ctx.createImageData(width,height);
  for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
          setPixel(imageData,x,y,r,g,b,a);
          
          
      }  
  }
  removeClass.classList.add("hidden");
  ctx.putImageData(imageData,0,0);
}
function ej4(ctx){

  let imageData=ctx.createImageData(width,height);
  for (let x = 0; x < imageData.height; x++) {
    let  color=x/(imageData.width-1)*255;
     for (let y = 0; y < imageData.width; y++) {
         setPixel(imageData,y,x,color,color,color,a);//para el gradiente en vertical se pasan los parametros invertidos 
       }  
     }

     removeClass.classList.add("hidden");
  ctx.putImageData(imageData,0,0);
}

function ej5(ctx){
  //cambia de negro a amarillo y de amarillo a rojo 
  // no llega a rojo queda en naranja 
  let red=255;
  let imageData=ctx.createImageData(width,height);
  for (let x = 0; x < imageData.height; x++) {
  for(let y=0;y<imageData.width;y++){
    if(y<=imageData.width/2){
      let color= y/(imageData.width/2-1)*255;
      setPixel(imageData,y,x,color,color,b,a);
    }else{
      let color=(imageData.width/2)/y*255;
      setPixel(imageData,y,x,red,color,b,a);
    }
    }
  }
  removeClass.classList.add("hidden");
  ctx.putImageData(imageData,0,0);
}
function ej6(ctx){
  
  removeClass.classList.remove("hidden");

  var imagen1= new Image();
  imagen1.src="flag.jpg";
  imagen1.onload=function(){
    ctx.drawImage(imagen1,0,0);
    ctxgray.drawImage(imagen1,0,0);
    grayColor(ctxgray);
}

  
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
//seteando pixeles
function setPixel(imageData,x,y,r,g,b,a) {
  let  index=(x+y*imageData.width)*4;
    imageData.data[index+0]=r;
    imageData.data[index+1]=g;
    imageData.data[index+2]=b;
    imageData.data[index+3]=a;
    
}






