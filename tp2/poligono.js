

class Poligono{
    constructor(ctx){
        this.ctx=ctx;
        this.arreglo= [];
        this.circuloCentro= null;
    }
    addCirculo(circle){
        this.arreglo.push(circle);
        if(this.arreglo.length > 1){
            this.drawLine(this.getUnCirculo(this.arreglo.length-1),this.getUnCirculo(this.arreglo.length-2));
            
        }
    }
    getCount(){
        return this.arreglo.length;
    }
    getUnCirculo(i){
       return this.arreglo[i];
    }
    getCirculo(){
        return this.arreglo();
    }
    drawLine(last,preLast){
        this.ctx.beginPath();
        this.ctx.lineWidth="3";
        this.ctx.strokeStyle="yellow";
        this.ctx.moveTo(preLast.getX(), preLast.getY());
        this.ctx.lineTo(last.getX(),last.getY());
        this.ctx.stroke();
        this.ctx.closePath();
    }

    cerrarPoligono(ctx){
        this.ctx.beginPath();
        this.ctx.moveTo(this.arreglo[0].getX(), this.arreglo[0].getY());
        this.ctx.lineTo(this.arreglo[this.arreglo.length-1].getX(),this.arreglo[this.arreglo.length-1].getY());
        this.ctx.stroke();
        this.ctx.closePath();
        this.generarCentro(ctx);
    }

    generarCentro(){
        let sumX=0;
        let sumY=0;
        for (let index = 0; index < this.arreglo.length; index++) {
            sumX= sumX+this.getUnCirculo(index).getX();
            sumY =sumY+ this.getUnCirculo(index).getY();
            
        }
        let x= sumX/this.arreglo.length;
        let y = sumY/this.arreglo.length;
        this.circuloCentro= new Circulo(x,y,"green",7);
        this.circuloCentro.draw(this.ctx);
    }
    centroClickeado(x,y){
        
        return this.circuloCentro.isClicked(x,y);
    }
    circuloClickeado(x,y){
        
        for (let index = 0; index < this.arreglo.length; index++) {
            if(this.arreglo[index].isClicked(x,y)){
                return true;
            }
            
        }
        return false;
    }

   
}