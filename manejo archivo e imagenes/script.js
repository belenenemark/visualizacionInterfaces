//referencia a los componentes
let espacio=document.getElementById("content");
let canvas= document.getElementById("canvas");
let input=document.getElementById("imagen");
//ajusto el canvas al div
let paintStyle=getComputedStyle(espacio);
canvas.width=parseInt(paintStyle.getPropertyValue("width"));
canvas.height=parseInt(paintStyle.getPropertyValue("height"));
//limpiar el canvas
var context=canvas.getContext("2d");
context.fillStyle="#ff0000";
context.fillRect(0,0,canvas.clientWidth,canvas.height);
//cuando hace click el input 

input.onchange= e=>{
    let file=e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=readerEvent=>{
        let content=readerEvent.target.result;
        let image=new Image();
        image.src=content;
        console.log(content);
        image.onload=function(){
            let imageAspectRatio=(1.0*this.height)/this.width;
            let imageScaledWidth=canvas.width;
            let imageScaledHeight=canvas.width*imageAspectRatio;
            //dibuja la imagen en el canvas
            context.drawImage(this,0,0,imageScaledWidth,imageScaledHeight);
            //obtiene la imagen
            let imageData=context.getImageData(0,0,imageScaledWidth,imageScaledHeight);
            //modifica la data salteando de a 1 a negro
            var pixels  = imageData.data;
           /* for (let j = 0; j < imageData.height; j++) {
                for (let i = 0; i < imageData.width; i++) {
                   if(i%2==0){
                       let index=(i+imageData.width*j)*4;
                    pixels[index+0]=0;
                    pixels[index+1]=0;
                       pixels[index+2]=0;
                   }
                    
                }
                
            }*/
            //con esto lo paso a escala de grises
            for(var i = 0; i < pixels.length; i += 4) {
                var grayscale= pixels[i]+pixels[i+1]+pixels[i+2]/3;
                pixels[i]=grayscale;
                pixels[i+1]=grayscale;
                pixels[i+2]=grayscale;
              }
            context.putImageData(imageData,0,0);

        }
    }
}

