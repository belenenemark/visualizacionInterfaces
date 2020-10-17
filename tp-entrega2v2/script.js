let canvas= document.getElementById("canvas");
//Seteo context
var ctx=canvas.getContext("2d");
let painting=document.getElementById("content");
let paintStyle=getComputedStyle(painting);
canvas.width=parseInt(paintStyle.getPropertyValue("width"));
canvas.height=parseInt(paintStyle.getPropertyValue("height"));
//Medida del ctx ajustada al canvas
ctx.width=canvas.width;
ctx.height=canvas.height;

let jugar=document.getElementById("jugar");
jugar.disabled=true;
let tamTab=document.getElementById("tab");
var fila;
var columna;
function obtenerMedida(){
    //defino las medidas del tablero
    let f=document.getElementById("fila");
    let c=document.getElementById("columna");
    fila=parseInt(f.value);
    columna=parseInt(c.value);
    tamTab.disabled = true;
    jugar.disabled=false;
};

tamTab.addEventListener("click",obtenerMedida);
jugar.addEventListener("click",jugar4enlinea);

function decidirTurnos(turno){

        if(turno==1){
            turno=2;
        }else{
            turno=1;
        }
}
//para controlar eventos del mouse
function oMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return { // devuelve un objeto
      x: Math.round(evt.clientX - rect.left),
      y: Math.round(evt.clientY - rect.top)
    }
}

function movimientos(tab,canvas){
    let arrastrar=false;
    let turno=1;
    let jugador=document.getElementById("jugador");
    //accion cuando baja el mouse
    
   let mov_abajo=addEventListener("mousedown",function(e){
    if(tab.getEstado()=="jugando"){
              //esto para poder activar el mousemove
        var mousePos = oMousePos(canvas,e);
        //con esto  manejo los turnos de cada jugador
      if(turno==1){
          jugador.innerHTML="Juega Ficha Azul";
        tab.drawFicha(e.offsetX,e.offsetY,"blue");
      }else {
        jugador.innerHTML="Juega Ficha Roja";
          tab.drawFicha(e.offsetX,e.offsetY,"red");      
      }
    if (ctx.isPointInPath(mousePos.x, mousePos.y)) {
        arrastrar = true;
    }
    }
     
       
    });
    let enmov=addEventListener("mousemove",function(e){
         if(tab.getEstado()=="jugando"){
        var mousePos = oMousePos(canvas, e);
                if (arrastrar) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                     tab.createTable();
                     X = mousePos.x , Y = mousePos.y 
                     if(turno==1){
                        tab.drawFicha(X,Y,"blue");
                      
              
                    }else {
                        tab.drawFicha(X,Y,"red");    
                         
                  }
                    
                }
            }      
        
    })

   
   let mov_arriba=addEventListener("mouseup",function(e){
    if(tab.getEstado()=="jugando"){   
    tab.addFichaTablero(e.offsetX,e.offsetY,turno);
    arrastrar=false;
      tab.createTable();
      if(tab.winner()){
        let popup=document.getElementById("popup");
       popup.classList.replace("po","overlay");

        let ganador=document.getElementById("ganador");
        //esto indica ganadores
        if(turno==1){
            ganador.innerHTML="Gano el jugador Azul";
        }else{
            ganador.innerHTML="Gano el jugador Rojo";
        }
        //y bueno aca para reiniciar la partida 
        let iniciar=document.getElementById("iniciar");
        iniciar.addEventListener("click",function(e){
            tab.createTable();
            popup.classList.replace("overlay","po");
        })


    }else{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        tab.createTable();

    }
       if(turno==1){
           turno=2;
       }else{
           turno=1;
       }
    }
        
    })

    

}
function jugar4enlinea(){
    jugar.value="jugando";
    jugar.disabled=true;
    let tab=new Tablero(ctx,fila,columna);
    tab.createTable();
    movimientos(tab,canvas);
    
}