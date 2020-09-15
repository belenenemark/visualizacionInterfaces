//ejercicio 1- matriz random de 100 
/*Definir una matriz de 100 elementos x 100 elementos y completarla con
valores enteros random, y resuelva los siguientes incisos:
a) Escribir una función que retorne el valor máximo de toda la matriz
b) Escribir una función que retorne el valor máximo contenido en las filas pares y el valor mínimo
en las filas impares
c) Calcular el valor promedio de cada fila y guardarlos en un arreglo.*/

/*definicion de la matriz y mostrar, si bien el ejercicio pide 100 lo deje en 10x10 para que quedara lindo, modifiquenme el codigo y anda igual pd:/javi romero -2:p*/
var col=10;
var fil=10;
var nuevoArray = new Array(fil);

//creacion del array
for(var i=0; i<col; i++) {
nuevoArray[i] = new Array(col);
}


//ASIGNACION VALORES RANDOM AL ARRAY 
for(var i=0; i<col; i++) {
for(var j=0; j<fil; j++) {
    nuevoArray[i][j]=Math.floor(Math.random()*100)+1;
}
}

mostrarArray(nuevoArray);
//FUNCION QUE VA A MOSTRAR EL ARRAY 
function mostrarArray(nuevoArray){
let result="<table>";
let tabla=document.getElementById('matr');
for (let index = 0; index <col; index++) {
result+="<th>"+index+"</th>";

}
for(var i=0; i<col; i++) {
result+="<tr>";
//Bucle que recorre el array que está en la posición i
for(var j=0; j<fil; j++) {
    result+="<td>"+nuevoArray[i][j]+"</td>";
    
}
result+="</tr>";
}

result+="</table>";
tabla.innerHTML=result;

}


/*a) Escribir una función que retorne el valor máximo de toda la matriz*/

function valorMaximo(nuevoArray){
let valor=0;
for(var i=0; i<col; i++) {
    for(var j=0; j<fil; j++) {
        if(valor<nuevoArray[i][j]){
            valor=nuevoArray[i][j];
        }
        
    }
}
return valor;

}
let valorMax=document.getElementById("valorMa");
valorMax.innerHTML="<p>El valor maximo del arreglo es: "+ valorMaximo(nuevoArray)+"</p>";

/*b) Escribir una función que retorne el valor máximo contenido en las filas pares y el valor mínimo
en las filas impares*/

function valorMaxymin(nuevoArray){
let  valor=new Array(2);
//inicializo el array valor 
valor[0]=0;
valor[1]=10000;
for(var i=0; i<col; i++) {
    for(var j=0; j<fil; j++) {
        //fila par mayores
        if(i%2==0){
            if(valor[0]<nuevoArray[i][j]){
                valor[0]=nuevoArray[i][j] ;
            }
            //fila impar menores
        }else{
            if(valor[1]>nuevoArray[i][j]){
                valor[1]=nuevoArray[i][j] ;
            }

        }
        
    }
}
return valor;

}
//resolucion inciso 2 
let valor=valorMaxymin(nuevoArray);

//mostrando el valor maximo y minimo
function mostrarValores(valor){
let result="<table>";
let tabla=document.getElementById('maximosyminimos');

    result+="<th>Max Par</th>";
    result+="<th>Min Impar</th>";
    
result+="<tr>";
for(var i=0; i<2; i++) {
    
    //Bucle que recorre el array que está en la posición i
        result+="<td>"+valor[i]+"</td>";
    
}
result+="</tr>";

result+="</table>";
tabla.innerHTML=result;

}
mostrarValores(valor);
console.log(valor[0]);
console.log(valor[1]);

/*c) Calcular el valor promedio de cada fila y guardarlos en un arreglo.*/

function promedioFilas(nuevoArray){
//inicializo el promedio
let promedio = new Array(fil);
for(var i=0; i<fil; i++) {
promedio[i] = 0;
}

for(var i=0; i<fil; i++) {
    let suma=0;
    for(var j=0; j<col; j++) {
        suma+=nuevoArray[i][j];
            
    }
    let prom=suma/col;
    promedio[i]=prom;

}



return promedio;

}

//funcion para mostrarlo en el DOM 
function mostrarPromedio(promedio){
let result="<table>";
let tabla=document.getElementById('prom');
for (let index = 0; index <col; index++) {
    result+="<th>"+index+"</th>";
    
}
result+="<tr>";
for(var i=0; i<col; i++) {
    
    //Bucle que recorre el array que está en la posición i
        result+="<td>"+promedio[i]+"</td>";
    
}
result+="</tr>";

result+="</table>";
tabla.innerHTML=result;


}

//resolviendo operacion de promedio
let promedio=promedioFilas(nuevoArray);
mostrarPromedio(promedio);

/*ejercicios con canvas, creacion de los eventos en los botones*/
document.getElementById("ejercicio2").addEventListener("click", ejercicio2);
document.getElementById("ejercicio3").addEventListener("click", ejercicio3);
document.getElementById("ejercicio4").addEventListener("click", ejercicio4);
document.getElementById("ejercicio5").addEventListener("click", ejercicio5);
document.getElementById("ejercicio6").addEventListener("click", ejercicio6);
document.getElementById("ejercicio7a").addEventListener("click", ejercicio7a);
document.getElementById("ejercicio7b").addEventListener("click", ejercicio7b);

/*variables preset para canvas*/
var ctx= document.getElementById("canvas").getContext("2d");
let width=document.getElementById("canvas").width;
let height=document.getElementById("canvas").height;
let ctxgray=document.getElementById("canvas1").getContext("2d");
let removeClass= document.getElementById("canvas1");
let r=0;
let g=0;
let b=0;
let a=255;

/*setPixel para los ejercicios 3 y 4*/
function setPixel(imageData,x,y,r,g,b,a) {
let  index=(x+y*imageData.width)*4;
    imageData.data[index+0]=r;
    imageData.data[index+1]=g;
    imageData.data[index+2]=b;
    imageData.data[index+3]=a;
    
}

/*las funciones para cada ejercicio*/
/*2. Pintar una región rectangular de un color utilizando el Contexto de HTML5. */
function ejercicio2(){
/*sacar los ejercicios 1 de javascript*/
borrarejercicio1();
/*inicio de ejercicio 2*/


ctx.fillStyle= "yellow";
console.log(ctx.fillStyle);
let x=0;
let y=0;

ctx.fillRect(x,y,width,height);
removeClass.classList.add("hidden");
}
function borrarejercicio1(){
/*sacar ejercicio 1 javascript*/
let tabla=document.getElementById('matr');
let valorMax=document.getElementById("valorMa");
let tablap=document.getElementById('prom');
let tablama=document.getElementById('maximosyminimos');
tabla.classList.remove("hidden");
tablap.classList.remove("hidden");
valorMax.classList.remove("hidden");
tablama.classList.remove("hidden");
tablap.classList.add("hidden");
tablama.classList.add("hidden");
tabla.classList.add("hidden");
valorMax.classList.add("hidden");

}
/*3.Pintar una región rectangular de un color utilizando la estructura de ImageData.*/ 
function ejercicio3(){
borrarejercicio1();
let imageData=ctx.createImageData(width,height);
for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
        setPixel(imageData,x,y,r,g,b,a);
        
        
    }  
}
removeClass.classList.add("hidden");
ctx.putImageData(imageData,0,0);
}
/*4.Especificar la función para pintar un cuadrado utilizando un gradiente de la siguiente forma: */
function ejercicio4(){
borrarejercicio1();
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
/*5. Pintar un rectángulo en pantalla, utilizando tres colores en un gradiente: De negro a amarillo en
la primera mitad del ancho del rectángulo, y de amarillo a rojo, en la segunda mitad. Por otro lado,
en Y el degrade se mantiene constante.*/
function ejercicio5(){
borrarejercicio1();
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
/*Pintar un rectángulo en pantalla, utilizando tres o cuatro colores en un gradiente. Todos los
colores deben ser armonías tonales. Puede ser en el eje X o Y.*/
function ejercicio6(){
console.log("aca va a ir el ejercicio6");
}
/*Cargar una Imagen desde disco o URL
a) Dibujar la imagen dentro del canvas
b) Implementar una función que aplique el filtro de escala de grises y muestre el resultado en el
canvas.*/

function ejercicio7a(){

let imagen1= new Image();

borrarejercicio1();
imagen1.src="panda.jpg";
console.log(imagen1);
imagen1.onload=function(){
    mydrawImageMethod(this);
    }
}
function mydrawImageMethod(image){
    
    ctx.drawImage(image,0,0.150,150);
}
function mydrawImageMethodGray(image){
ctxgray.drawImage(image,0,0,150,150);
grayColor(ctxgray);
}
function ejercicio7b(){
removeClass.classList.remove("hidden");
let imagen1= new Image();
borrarejercicio1();
imagen1.src="panda.jpg";
console.log(imagen1);
imagen1.onload=function(){
    mydrawImageMethodGray(this);

    }

}

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





