"use strict";
class Personaje{
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
        this.elementId.classList.add('correr');
    }

    salto(){
        this.elementId.classList.add('salto');
        setTimeout(() => {
            this.elementId.classList.remove('salto');
          }, 800);
    }

    posicionActual() {
        this.position.top = this.elementId.getBoundingClientRect().top;
        this.position.left = this.elementId.offsetLeft;
      }

    contacto(obstaculo){
        this.posicionActual();
        obstaculo.posicionActual();

        const offset = 20;
    
        if (this.position.left < obstaculo.position.left + obstaculo.width &&
          this.position.left + this.width - offset > obstaculo.position.left &&
          this.position.top < obstaculo.position.top + obstaculo.height &&
          this.position.top + this.height > obstaculo.position.top) {
          return true;
        }
        return false;
    }


}