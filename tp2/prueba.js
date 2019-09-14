


//ejercicio 1
let but1= document.getElementById("ej1");
but1.onclick=function(){
       // prueba con onclick
 canvas.addEventListener("click",function(e){
let x = e.pageX - this.offsetLeft; 
 let y = e.pageY - this.offsetTop; 
   console.log(x);
console.log(y);
 });
}

//ejercicio 2,3,4,5,10
var context =  canvas.getContext('2d');
var circulos = new Poligono(context);
var poligonos = [];
let cerrarP= document.getElementById("cerrarP").addEventListener("click",cerrar);
function cerrar(){
        if(circulos.getCount() > 2){
            circulos.cerrarPoligono(context);
            poligonos.push(circulos);
            circulos = new Poligono(context);
        } else{
            alert("no tienes cantidad suficiente para cerrar poligono");
        }
}

canvas.onclick=function(e){ 
    let x = e.pageX - this.offsetLeft; 
    let y = e.pageY - this.offsetTop; 
    let circle= new Circulo(x,y,"red",10);
    
    circle.draw(context); 
    circulos.addCirculo(circle);
    console.log(circulos.getCirculo.length);     
}






//prueba con double click
//  canvas.addEventListener("dblclick",function(e){
//     let x = e.pageX - this.offsetLeft; 
//      let y = e.pageY - this.offsetTop; 
//      console.log(x);
//      console.log(y);
//  });

//  canvas.addEventListener("drag",function(e){
//     let x = e.pageX - this.offsetLeft; 
//      let y = e.pageY - this.offsetTop; 
//      console.log(x);
//      console.log(y);
//  });
 
  