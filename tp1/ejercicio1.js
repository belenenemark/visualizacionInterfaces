let col= 5;
		let fil=5;
		var nuevoArray = new Array(fil);

		
		 for (let index = 0; index <fil; index++) {
			nuevoArray[index] = new Array(col);
			 for (let j = 0; j < col; j++) {
				 nuevoArray[index,j]=Math.floor(Math.random()*100)+1;
				 
			 }	

		}
		let valor=calcularMaximo(nuevoArray);
		
		let valores=calcularMaxCalcularMin(nuevoArray);
		console.log(valores[0]);
		console.log(valores[1]);

		function calcularMaximo(matriz){
			let guardaSuma=0;
			for (let index = 0; index <fil; index++) {
				let suma=0;
				for (let j = 0; j < col; j++) {
					suma= suma+matriz[index,j];
					
				}
				if(suma>guardaSuma){
					guardaSuma=suma;
				}
				
			}
			return guardaSuma;
		}

		function calcularMaxCalcularMin(matriz){
			let guardaSuma=new Array(2);
			guardaSuma[0]=0;
			guardaSuma[1]=10000;
			for (let index = 0; index <fil; index++) {
				let suma=0;
				for (let j = 0; j < col; j++) {
					suma= suma+matriz[index,j];
					
				}
				
				if((index % 2)==0){
					if(suma>guardaSuma[0]){
						guardaSuma[0]=suma;
					}
				}else if ((index%2)!=0) {
					if((guardaSuma[1]==0) && (index==0)) {
						guardaSuma[1]=suma;
					}else{
						if(suma<guardaSuma[1]){
							guardaSuma[1]=suma;
						}
					}
				}
				
			}
			return guardaSuma;

		}