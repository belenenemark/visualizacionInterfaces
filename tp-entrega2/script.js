

/* Para este tp la forma de encararlo fue: crear un tablero dinamico con las restricciones correspondientes para que
 no se pierda la forma. Para guardar las posiciones de los circulos creados en el tablero se utilizo un arreglo contenedor
 Se realizaron tres clases.
 1- La clase circulo la cual permitio la creacion y manipulacion de los circulos. 
 2-La clase tablero donde se desarrolla el juego en si mismo. 
 3-La clase jugador que tiene como responsabilidad indicar donde desea poner la ficha y evaluar si gano */
let canvas= document.getElementById("canvas");
//seteo context
let ctx=canvas.getContext("2d");
let painting=document.getElementById("content");
let paintStyle=getComputedStyle(painting);
canvas.width=parseInt(paintStyle.getPropertyValue("width"));
canvas.height=parseInt(paintStyle.getPropertyValue("height"));
//medida del ctx ajustada al canvas
ctx.width=canvas.width;
ctx.height=canvas.height;


//aca se redimensiona el tamaño del tablero
let medida= document.getElementById("tablero");
medida.addEventListener("click",function(e){
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //para armar los valores del tablero
    let tabx=document.getElementById("x");
    let taby=document.getElementById("y");
    let valx=parseInt(tabx.value)+1;
    let valy= parseInt(taby.value)+1;
    let  tab=new tablero(ctx,valx,valy);
    var arrastrar = false;
    var delta = new Object();
    var X = canvas.width / 2;
    var Y = canvas.height / 2;

    function oMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return { // devuelve un objeto
      x: Math.round(evt.clientX - rect.left),
      y: Math.round(evt.clientY - rect.top)
    };
  }
    function movimiento(canvas,tab){
        
        let vuelta=1;
            canvas.addEventListener("mousedown",function(e){
                if(vuelta=1){
                    var mousePos = oMousePos(canvas, e);
                    tab.drawFicha(e.offsetX,e.offsetY,tab.getjugador1());
                    if (ctx.isPointInPath(mousePos.x, mousePos.y)) {
                        arrastrar = true;
                        vuelta=2;
                    }

                }
               
                
            
            },false);
            canvas.addEventListener("mousemove", function(evt) {
                var mousePos = oMousePos(canvas, evt);
                if (arrastrar) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    tab.createTable();
                    X = mousePos.x , Y = mousePos.y 
                   tab.drawFicha(X,Y,tab.getjugador1());
                  }
              }, false);
              canvas.addEventListener("mouseup", function(evt) {
                
                    tab.changeCirculo(evt.offsetX,evt.offsetY,tab.getjugador1().getcolorFicha(),tab.getjugador1());
                    arrastrar = false;
                    
                     
                
              }, false);
        

    }
 //este if controla que no se rompa la simetria en el tablero y adentro del mismo se juega 
    if((valx/valy<=3)&&(valy/valx<=1.3)&&(valx>=4)&&(valy>=4)){
        tab.createTable();
        //todas las acciones para que se mueva al rededor del tablero
            movimiento(canvas,tab);
       















    }else{
        alert("Valor de tablero invalido, tiene que ser un numero mayor a 4 y la fila mayor que la columna");
    }
});






