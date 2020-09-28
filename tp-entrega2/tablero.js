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
    }  

    drawFicha(e){
       let x = e.offsetX;
       let y = e.offsetY;
       let px=this.ctx.width/this.valx;
        let py=this.ctx.height/this.valy;
        let Ppi=Math.PI;
        let radi=((2*(px+py))/(2*Ppi))/2;
        this.jugador1.drawFicha(this.ctx,x,y,radi);
    
    }
    
}  


