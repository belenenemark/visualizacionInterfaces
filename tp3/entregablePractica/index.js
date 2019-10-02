"use strict";
//  funciones del ejercicio 2
var pulsado= document.getElementById("randomDiv");
pulsado.addEventListener("click",agregarTransformacion);

function agregarTransformacion(){
     let randomValor= Math.floor(Math.random() * 3)+1;
     switch (randomValor) {
        case 1:
       
        reemplazo("rotate","skew","scale");
         
        
          
          break;
        case 2:
            reemplazo("scale","rotate","skew");
            
            
          break;
        case 3:
                reemplazo("skew","scale","rotate");
            
          break;
        default:
          alert( "I don't know such values" );
      }
}

function reemplazo(areemp, reempA,reempB){
    if(pulsado.classList.length==0){
        pulsado.classList.add(areemp);
    }else{
        if(pulsado.classList.contains(reempA)){
            pulsado.classList.replace(reempA,areemp);
        }else if(pulsado.classList.contains(reempB)){
            pulsado.classList.replace(reempB,areemp);
        }else{
            pulsado.classList.replace(areemp,areemp);
        }
    }
}
//con esto deberia mover el ninja 
var cursor = document.getElementById('cursor');
var luffy = document.getElementById('luffy');
var contenedor = document.getElementById('cont');

contenedor.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY; 
    console.log(x);
    console.log(y);
    luffy.style.left= x +"px";
    luffy.style.top= y + "px";
});

// document.addEventListener('mousemove',function(e){
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.left= x +"px";
//     cursor.style.top= y + "px";

// })