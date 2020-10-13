class jugador{
    constructor(color, maxmovimientos){
        this.posiciones=new Array(maxmovimientos);
        this.ficha= null;
        this.colorFicha=color;
    }

    getcolorFicha(){
        return this.colorFicha;
    }

    setPosiciones(circulo){
        this.posiciones.push(circulo);
    }
    getPosiciones(){
        return this.posiciones;
    }
    drawFicha(ctx,x,y,radio){
        this.ficha= new Circulo(x,y,this.colorFicha,radio);
        //this.setPosiciones(this.ficha);
        this.ficha.drawFill(ctx);
    }

}