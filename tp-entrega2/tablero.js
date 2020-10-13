class tablero{
    constructor(ctx,valx,valy){
        this.ctx=ctx;
        this.valx=valx;
        this.valy=valy;
        this.arrCirculos=[];
        this.jugador1=new jugador("blue",(valx*valy)/2);
        this.jugador2=new jugador("red",(valx*valy)/2);
    }

    //mensaje para verificar que el contexto este seteado
    message(){
        console.log(this.ctx);
        console.log(this.ctx.width);
        console.log(this.ctx.height);
        console.log(this.valx);
        console.log(this.valy);
    
    }
    getjugador1(){
        return this.jugador1;
    }
    getjugador2(){
        return this.jugador2;
    }
    //inicializa el arreglo circulos
    initArrCirculos(){
        this.arrCirculos=new Array(this.valx);
        for (let index = 0; index < this.arrCirculos.length; index++) {
             this.arrCirculos[index] = new Array(this.valy);
            
        }
    }
    //muestra el arreglo de circulos 
    showArr(){
       
        for (let index = 1; index < this.valx; index++) {
            for (let j = 1; j< this.valy; j++) {
                console.log(this.arrCirculos[index][j]);
                
            }
            
        }
        //console.log(this.arrCirculos);
    }
    //crea la tabla apartir de la medida 
   createTable(){
    let tamw=0;
    let i=1;
    if(this.arrCirculos.length==0){
    this.initArrCirculos();
    while (tamw<this.ctx.width) {
        tamw=this.ctx.width/this.valx*i;
    if(tamw!=this.ctx.width){
        let tamh=0;
        let j=1;
        while(tamh<this.ctx.height){
            tamh=this.ctx.height/this.valy*j;
            if(tamh<this.ctx.height){
                let px=this.ctx.width/this.valx;
                let py=this.ctx.height/this.valy;
                let Ppi=Math.PI;
                let radi=((2*(px+py))/(2*Ppi))/2;
                let circle= new Circulo(tamw,tamh,"black",radi);
                this.arrCirculos[i][j]=circle;
                circle.drawFill(this.ctx);
            }
            j++;
        }

    }
        i++;
    }

    }else{
        for (let index = 1; index < this.valx; index++) {
            for (let j = 1; j< this.valy; j++) {
                this.arrCirculos[index][j].drawFill(this.ctx);
                
            }
            
        }
   
    }
    
    }  

    drawFicha(x,y, jugad){
       let px=this.ctx.width/this.valx;
        let py=this.ctx.height/this.valy;
        let Ppi=Math.PI;
        let radi=((2*(px+py))/(2*Ppi))/2;
       jugad.drawFicha(this.ctx,x,y,radi);
    
    }
    //esta funcion lo que hace es recibe la posicion del down 
    changeCirculo(x,y,colorFicha, jugador){

        if(this.arrCirculos!=null){
            let index=1;
            let encontrado=false;
            while((index < this.valx) &&(!encontrado)) {
                
                let j=1;
                while((j<this.valy)&&(!encontrado)){
                    
                    if(this.arrCirculos[index][j].isClicked(x,y)){
                       
                        encontrado=true;
                        this.asignarColor(index,colorFicha,jugador);
                    }
                    j++;
                }
               
                index++; 
            }
           
                
            }
        }
        //asigna el color en el tablero y guarda la posicion que lleno el jugador 
    asignarColor(i,colorFicha,jugador){
      let  j=this.valx-1;
        let asignado=false;
      while((j>=1)&&(!asignado)){
         if (this.arrCirculos[i][j].getColor()=="black"){
            this.arrCirculos[i][j].setColor(colorFicha);
            this.arrCirculos[i][j].drawFill(this.ctx);
            jugador.setPosiciones(this.arrCirculos[i][j]);
            asignado=true;
         } 
         j--;  
     }
    }
    borrarFicha(x,y){
        //buscar en el arreglo de circulos con las posiciones x, y => para eliminar la posicion i, j 
        

    }

}
  
    


