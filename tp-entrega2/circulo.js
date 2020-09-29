
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
    ctx.arc(this.x, this.y,this.radio, 0, 2 * Math.PI, false);
    ctx.strokeStyle = this.color;
    ctx.stroke();

   }
   drawFill(ctx){
     
    ctx.beginPath();
    ctx.arc(this.x, this.y,this.radio, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();

   }
   
   isClicked(x,y){
    let pos = Math.sqrt( Math.pow((x - this.x),2) + Math.pow((y - this.y),2)  );
    return pos <= this.radio;
   }
    

 };
