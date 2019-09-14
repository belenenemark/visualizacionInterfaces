
//variables arriba
let but1= document.getElementById("ej1");
var context =  canvas.getContext('2d');
var circulos = new Poligono(context);
var poligonos = [];
let cerrarP= document.getElementById("cerrarP")

//acciones
but1.addEventListener("click",detectarClicksConsola);
canvas.addEventListener("click",crearCirculos);
cerrarP.addEventListener("click",cerrar);




//ejercicio 2,3,4,5,6(parte 1)10
//funciones
function detectarClicksConsola(){
    canvas.addEventListener("click",function(e){
        let x = e.pageX - this.offsetLeft; 
        let y = e.pageY - this.offsetTop; 
       console.log(x);
    console.log(y);
    });
}

function cerrar(){
        if(circulos.getCount() > 2){
            circulos.cerrarPoligono(context);
            poligonos.push(circulos);
            circulos = new Poligono(context);
        } else{
            alert("no tienes cantidad suficiente para cerrar poligono");
        }
}

function esVacio(x,y) {
     if(poligonos.length > 0){
        for (let index = 0; index < poligonos.length; index++) {
           let poligono = poligonos[index];
           if(poligono.circuloClickeado(x,y) || poligono.centroClickeado(x,y)){
               return false;
           }
            
        }
      
    }
    return true;
    
}

function crearCirculos() {
    let x = event.pageX - this.offsetLeft; 
    let y = event.pageY - this.offsetTop; 
    
    if(esVacio(x,y)){
        
        let circle= new Circulo(x,y,"red",10);
        circle.draw(context); 
        circulos.addCirculo(circle);
    }
}




