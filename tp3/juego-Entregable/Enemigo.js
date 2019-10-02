"use strict";
class Enemigo{
    constructor(personaje){
        this.personajeId = personaje;
        this.elementId = document.getElementById(this.personajeId);
        this.width = this.elementId.getBoundingClientRect().width;
        this.height = this.elementId.getBoundingClientRect().height;
        this.position = {
                        top: this.elementId.getBoundingClientRect().top, 
                        left: this.elementId.offsetLeft
                      };
       
        
        
        
    }

    inicio(){
        this.elementId.classList.add('emovimiento');
        setTimeout(() => {
          this.elementId.classList.add('emove');
        }, 5000);
    }

    posicionActual() {
        this.position.top = this.elementId.getBoundingClientRect().top;
        this.position.left = this.elementId.offsetLeft;
      }
    
      parar(){
        this.elementId.classList.remove('emove');
      }

}