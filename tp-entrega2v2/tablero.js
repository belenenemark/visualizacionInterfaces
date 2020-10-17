class Tablero{
    constructor(ctx,fila,columna){
        this.ctx=ctx;
        this.fila=fila;
        this.columna=columna;
        this.arrCirculos=new Array(fila);
        this.cuadrados=new Array(fila);
        this.radio=null;
        for (let index = 0; index < this.arrCirculos.length; index++) {
            this.arrCirculos[index] = new Array(columna);
            this.cuadrados[index]=new Array(columna);
            
        }
        this.lastPosX=null;
        this.lastPosY=null;
        this.numeroLineas=4;
        this.estadoJuego="jugando";
       this.ficha=null;
    }
   showPiezas(){
        for (let f = 0; f < this.arrCirculos.length; f++) {
            for (let c = 0; c < this.arrCirculos[f].length; c++) {
                this.cuadrados[f][c].draw(this.ctx);
                this.arrCirculos[f][c].draw(this.ctx);
                
            }
            
        }
    }
    getEstado(){
        return this.estadoJuego;
    }
    initTableroNuevo(){
        //hacer cambios para que buclee bien 
        //con esto determino el ancho y alto de las casillas
        let casillaancho=ctx.width/this.columna;
        let casillaalto=ctx.height/this.fila;
        let posX;
        let posY =0;
        //para recalcular el circulo
        let centroX=casillaancho/2;
        let centroY=casillaalto/2;
        let radi=centroX/2;
        if(centroX<centroY){
            radi=centroY/2;
        }
        radi--;
        this.radio=radi;
        for (let f = 0; f < this.arrCirculos.length; f++) {
            let posX =0;
            for (let c = 0; c < this.arrCirculos[f].length; c++) {
                this.drawCasilla(posX,posY,casillaancho,casillaalto,f,c,centroX,centroY,radi); 
                posX +=casillaancho;   
                
            }
            posY +=casillaalto;
        }
    }
    //chequea si el array esta vacio 
    checkarray(obj){
        let chequeado=false;
        for (let f = 0; f < obj.length; f++) {
            for (let c = 0; c < obj[f].length; c++) {
                if((typeof this.arrCirculos[f][c])=="undefined"){
                    chequeado=true;

                }
                
            }
            
        }
        


        return chequeado;


    }
    createTable(){
       //en caso de que el arreglo este vacio
        if(this.checkarray(this.arrCirculos)||this.estadoJuego=="finalizado"){
            this.initTableroNuevo();
           this.estadoJuego="jugando";

        }else{
            //en caso de que el arreglo este completo
            this.showPiezas();
            console.table(this.arrCirculos);
            console.table(this.cuadrados);
        }
    }
    //dibuja las casillas
    drawCasilla(x,y,casillaancho,casillaalto,f,c,centroX,centroY,radi){
        let cuadrado=new Rectangulo(x,y,"pink",casillaancho,casillaalto);
        let circulo=new Circulo(x+centroX,y+centroY,"yellow",radi);
        cuadrado.draw(this.ctx);
        circulo.draw(this.ctx);
        this.arrCirculos[f][c]=circulo;
        this.cuadrados[f][c]=cuadrado;

    }
    //dibuja ficha jugador
    drawFicha(x,y,color){
        this.ficha=new Circulo(x,y,color,this.radio);
        this.ficha.draw(this.ctx);
    }
    //asigna el color a la nueva ficha del tablero
    asignarColor(c,colorFicha){
        let  f=this.fila-1;
          let asignado=false;
        while((f>=0)&&(!asignado)){
           if (this.arrCirculos[f][c].getColor()=="yellow"){
              this.arrCirculos[f][c].setColor(colorFicha);
             this.cuadrados[f][c].draw(this.ctx);
              this.arrCirculos[f][c].draw(this.ctx);
              this.lastPosX=f;
              this.lastPosY=c;
              asignado=true;
           } 
           f--;  
       }
      }

    //agregar ficha al tablero 
    addFichaTablero(x,y,turno){
        var colorFicha=null;
        
        if(turno==1){
            colorFicha="blue";
        }else{
            colorFicha="red";
        } 
        let encontrado=false;
           let c=0;
            while((c < this.columna) &&(!encontrado)) { 
                let f=0;
                while((f<this.fila)&&(!encontrado)){
                    if(this.cuadrados[f][c].isClicked(x,y)){
                        encontrado=true;
                        this.asignarColor(c,colorFicha);
                    }
                    f++;
                }
               
                c++; 
            }
    }
    winner(){
        console.log("posicion x",this.lastPosX,"posicion y",this.lastPosY);
        if((this.lastPosX!=null)&&(this.lastPosY!=null)){
            let colorF=this.arrCirculos[this.lastPosX][this.lastPosY].getColor();
            console.log("valor del color de la ficha",colorF);
            let i=this.lastPosY;
            let contador=0;
            let contDerecha=0;
        //evalua horizontal hacia izquierda 
        while((i>=0)&&(this.arrCirculos[this.lastPosX][i]!=null)){
            if(this.arrCirculos[this.lastPosX][i].getColor()==colorF){
                contador++;
            }else
            break;
            i--;
        }
        i=this.lastPosY;
        //evalua horizontal hacia derecha
        while((i<this.columna)&&(this.arrCirculos[this.lastPosX][i]!=null)){
            if(this.arrCirculos[this.lastPosX][i].getColor()==colorF){
                contDerecha++;

            }else
            break;

            
            i++;
        }
        //evalua si gano solo con horizontales
        if((contDerecha+contador-1)==this.numeroLineas){
            this.estadoJuego="finalizado";
            return true;
        }
        i=this.lastPosX;
        contador=0;
        //evalua cantidad para abajo
        while((i<this.fila)&&(this.arrCirculos[i][this.lastPosY]!=null)){
            if(this.arrCirculos[i][this.lastPosY].getColor()==colorF){
                contador++;

            }else
            break;
            i++;
        }
        if(contador==this.numeroLineas){
            this.estadoJuego="finalizado";
            return true;
        }
        //evalua diagonal de izquierda a derecha 
        i=0;
        contador=0;
        while((this.lastPosX-i>=0)&&(this.lastPosY-i>=0)&&(this.arrCirculos[this.lastPosX-i][this.lastPosY-i]!=null)){
            if(this.arrCirculos[this.lastPosX-i][this.lastPosY-i].getColor()==colorF){
                contador++;

            }else{
                break;
            }
            
            i++;
        }
        i=0;
        contDerecha=0;
        while((this.lastPosX+i<this.fila)&&(this.lastPosY+i<this.columna)&&(this.arrCirculos[this.lastPosX+i][this.lastPosY+i]!=null)){
            if(this.arrCirculos[this.lastPosX+i][this.lastPosY+i].getColor()==colorF){
                contDerecha++;

            }else
            break;
            i++;
        }
        if((contDerecha+contador-1)==this.numeroLineas){
            this.estadoJuego="finalizado";
            return true;
        }
        //evalua diagonal de derecha a izquierda
        i=0;
        contador=0;
        while((this.lastPosX+i<this.fila)&&(this.lastPosY-i>=0)&&(this.arrCirculos[this.lastPosX+i][this.lastPosY-i]!=null)){
            if(this.arrCirculos[this.lastPosX+i][this.lastPosY-i].getColor()==colorF){
                contador++;

            }else{
                break;
            }
            
            i++;
        }
        i=0;
        contDerecha=0;
        while((this.lastPosX-i>=0)&&(this.lastPosY+i<this.columna)&&(this.arrCirculos[this.lastPosX-i][this.lastPosY+i]!=null)){
            if(this.arrCirculos[this.lastPosX-i][this.lastPosY+i].getColor()==colorF){
                contDerecha++;

            }else
            break;
            i++;
        }
        if((contDerecha+contador-1)==this.numeroLineas){
            this.estadoJuego="finalizado";
            return true;
        }

              }
        return false;
    }



    
    
} 
    
