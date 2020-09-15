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
let download=document.getElementById("download");
//limpiar lienzo
let cleanLienzo=document.getElementById("lienzo");
cleanLienzo.addEventListener("click",function(e){
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);

})

//dibujar en el lienzo
function draw(){
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
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
//ejercicio 2-carga de archivos desde disco
let input=document.getElementById("imagen");
//funcion blanco y negro
function bw(pixels){
    for(var i = 0; i < pixels.length; i += 4) {
        var grayscale= pixels[i]+pixels[i+1]+pixels[i+2]/3;
        setPixel(pixels,grayscale,i);
        
      }

}
//a escala de grises
function setPixel(pixels, scala, i){
    pixels[i]=scala;
    pixels[i+1]=scala;
    pixels[i+2]=scala;

}
//funcion a negativo
function negative(pixels){
    for(let i = 0; i < pixels.length; i ++) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];
        setPixelNegative(pixels,i,r,g,b);
       
        }
}
//valores negativos
function setPixelNegative(pixels,i,r,g,b){
    

    pixels[ i * 4 ] = 255 - r;
    pixels[ i * 4 + 1 ] = 255 - g;
    pixels[ i * 4 + 2 ] = 255 - b;

}
//sepia
function sepia(pixels){
    console.log("entra a la funcion sepia");
    for ( var i = 0; i < pixels.length; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];
        setPixelNegative(pixels,i,r,g,b);
 
        pixels[ i * 4 ] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
        pixels[ i * 4 + 1 ] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
        pixels[ i * 4 + 2 ] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );
    }
}

//valores de brillo 
function contrast(contraste,pixels){
    
               let factor = ( 259 * ( contraste + 255 ) ) / ( 255 * ( 259 - contraste ) );
 
                for ( var i = 0; i < pixels.length; i++ ) {
                    var r = pixels[ i * 4 ];
                    var g = pixels[ i * 4 + 1 ];
                    var b = pixels[ i * 4 + 2 ];
             
                    pixels[ i * 4 ] = factor * ( r - 128 ) + 128;
                    pixels[ i * 4 + 1 ] = factor * ( g - 128 ) + 128;
                    pixels[ i * 4 + 2 ] = factor * ( b - 128 ) + 128;
                }

}
//blur 
function blur(pixels){
    let variation = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9];
    let size = Math.sqrt(variation.length);
    let half = Math.floor(size / 2);
    let width = canvas.width;
    let height = canvas.height;
    let inputData = ctx.getImageData(0, 0, width, height).data;
    let pixelsAbove;
    let weight;
    let neighborY;
    let neighborX;
    let inputIndex;
    let outputIndex;

    for (let i = 0; i < height; ++i) {
        pixelsAbove = i * width;
        for (let j = 0; j < width; ++j) {
         let   r = 0;
         let   g = 0;
         let   b = 0;

            for (let variationY = 0; variationY < size; ++variationY) {
                for (let variationX = 0; variationX < size; ++variationX) {
                    weight = variation[variationY * size + variationX];
                    neighborY = Math.min(
                        height - 1,
                        Math.max(0, i + variationY - half)
                    );
                    neighborX = Math.min(
                        width - 1,
                        Math.max(0, j + variationX - half)
                    );
                    inputIndex = (neighborY * width + neighborX) * 4;
                    r += inputData[inputIndex] * weight;
                    g += inputData[inputIndex + 1] * weight;
                    b += inputData[inputIndex + 2] * weight;
                }
            }
            outputIndex = (pixelsAbove + j) * 4;
            pixels[outputIndex] = r;
            pixels[outputIndex + 1] = g;
            pixels[outputIndex + 2] = b;
        }
    }
}

//apartir de aca pasa toda la magia con la imagen 
input.onchange= e=>{
    //limpiar el canvas
    let context=canvas.getContext("2d");
    context.fillStyle="#ff0000";
    context.fillRect(0,0,canvas.clientWidth,canvas.height);
    //empieza a leer el archivo
    let file=e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    //una vez que esta cargado activa el evento
    reader.onload=readerEvent=>{
        let content=readerEvent.target.result;
        let image=new Image();
        image.src=content;
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

            //todos los botones
            let blw= document.getElementById("bw");
            let neg=document.getElementById("negative");
            let sep=document.getElementById("sepia");
            let con=document.getElementById("contrast");
            let blu=document.getElementById("blur");
            //blanco y negro
           
            blw.addEventListener("click",function(e){
                bw(pixels);
                context.putImageData(imageData,0,0);
            });
            //negativo
            neg.addEventListener("click",function(e){    
                negative(pixels);
                context.putImageData(imageData,0,0);
            });
            //sepia
            sep.addEventListener("click",function(e){
                   
                    sepia(pixels);
                    context.putImageData(imageData,0,0);

            });
           //brillo
                con.addEventListener("click",function(e){
                    contrast(100,pixels);
                    context.putImageData(imageData,0,0);

                });
            //blur
            blu.addEventListener("click",function(e){
                blur(pixels);
                context.putImageData(imageData,0,0);

            });


        }
    }
}
//guardar el archivo
let descarga=download.addEventListener("click",function(e){
    save();
});
function save(){
    
    let link = window.document.createElement( 'a' ),
        url = canvas.toDataURL(),
        filename = 'imagen-modificada.jpg';
 
    link.setAttribute( 'href', url );
    link.setAttribute( 'download', filename );
    link.style.visibility = 'hidden';
    window.document.body.appendChild( link );
    link.click();
    window.document.body.removeChild( link );
}
//elegir entre una opcion y la otra 
function chooseFilter(filter){
    switch (filter)
	{
	case "Blur":
        blur(pixels);
        context.putImageData(imageData,0,0);
		break
	case "contrast":
		contrast(100,pixels);
         context.putImageData(imageData,0,0);
		break
    case "sepia":
        sepia(pixels);
        context.putImageData(imageData,0,0);
            break
    case "negative":
        negative(pixels);
        context.putImageData(imageData,0,0);
            break
     case "bw":
             bw(pixels);
            context.putImageData(imageData,0,0);
                    break
	}
}



