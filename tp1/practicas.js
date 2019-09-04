"use strict";
let ctx= document.getElementById("canvas").getContext("2d");
let width=document.getElementById("canvas").width;
let height=document.getElementById("canvas").height;

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
 ctx.fillRect(x,y,width,height);//crea un rectangulo con estas medidas
}

function ej3(ctx){
  let imageData=ctx.createImageData(width,height);
  for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
          setPixel(imageData,x,y,r,g,b,a);
          
          
      }  
  }
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
  ctx.putImageData(imageData,0,0);
}
function ej6(ctx){
  var imagen1= new Image();
  imagen1.src="flag.jpg";
  imagen1.onload=function(){
    ctx.drawImage(imagen1,0,0);
  }

  
}
function setPixel(imageData,x,y,r,g,b,a) {
  let  index=(x+y*imageData.width)*4;
    imageData.data[index+0]=r;
    imageData.data[index+1]=g;
    imageData.data[index+2]=b;
    imageData.data[index+3]=a;
    
}






