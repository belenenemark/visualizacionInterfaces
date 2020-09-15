
// document.addEventListener("keyup",caer);
// var personaje = document.getElementById("personaje");
// var  luffy = new Personaje(personaje);

// let start = document.getElementById('start');
// let end = document.getElementById('end');
// let globalId;
// let finjuego=false;

// if(finjuego==false){
//     start.addEventListener('click',repeatOften);
//     end.addEventListener('click',endRepeat)
// }
// else{
//     alert('fin del juego');
// }


// function repeatOften() {
   
//     personaje.classList.add('correr');
//     document.addEventListener("keypress",luffy.salto);
    
//     globalId = requestAnimationFrame(repeatOften);
//   }

// function endRepeat() {
//     cancelAnimationFrame(globalId);
//     finjuego=true;
//     personaje.classList.remove('correr');
    
//   }

"use strict";

window.addEventListener('DOMContentLoaded', (event) => {
  var ciclo = false;
  const luffy = new Personaje('luffy');
  const enemigo = new Enemigo('enemigo');

  function movimiento (event){
    if(event.type == 'keydown'){
      luffy.salto();
    }
  }

  function gameLoop() {
    console.log('loop')
    console.log(luffy.contacto(enemigo))
    if (luffy.contacto(enemigo)) {
      ciclo = false;
     console.log('impacto')
    }else{
      console.log('no impacto')
      requestAnimationFrame(gameLoop);
    }
   
  }

  
  function inicio(){
    luffy.inicio();
    enemigo.inicio();
    ciclo = true;
    requestAnimationFrame(gameLoop)
  }
  window.addEventListener('keydown',movimiento);

  inicio();
});



