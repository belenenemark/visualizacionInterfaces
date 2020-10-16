//aca vamos a tener la clase figura y las clases que se extienden de ello que son rectangulo y circulo 
// //Clase Figura
class Figura{
    constructor(x,y,color){
        this.x=x;
        this.y=y;
      this.color=color;
      
  }
  setX(x) {
    this.x=x;
   
}
setY(y){
    this.y=y;
}
setColor(color){
   this.color=color;
}
getColor(){
    return this.color;
}
getX(){
    return this.x;

}
getY(){
    return this.y;
}

}

//Clase Rectangulo 
class Rectangulo extends Figura{
    constructor (x, y, color,width, height){
        super(x,y,color);
        this.width = width;
        this.height = height;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
            ctx.strokeStyle = this.highlightedStyle;
            ctx.lineWidth = 5;
            ctx.strokeRect(this.x,this.y,this.width,this.height);
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    isClicked(x,y){
        return !(x < this.x || x > this.x + this.width || y < this.y || y > this.y + this.height);
    }

}


//Clase Circulo
class Circulo extends Figura {
    constructor(x,y,color,radio){
            super(x,y,color);
         this.radio=radio;

   }
   setRadio(radio){
       this.radio=radio;
   }
  
    mensaje(){
       console.log(this.x);
       console.log(this.y);
        console.log(this.radio);
        console.log(this.color);
    }
    draw(ctx){
     
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.radio, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();

   }
  
   
   isClicked(x,y){
    let pos = Math.sqrt( Math.pow((x - this.x),2) + Math.pow((y - this.y),2)  );
    return pos <= this.radio;
   }
    

 };
