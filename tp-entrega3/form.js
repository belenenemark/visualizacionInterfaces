
//el videito de jyg proyectos web es una masa pd:/ no le copie a ningun compañero recomiendo sus videos
//recordar hacer click en la campanita y darle suscribir al canal
//javi romero dice que googlear es bueno y reutilizar tambien... 
let inputs=document.getElementsByClassName("formulario__input");
for (let index = 0; index < inputs.length; index++) {
   inputs[index].addEventListener('keyup',function(){
       if(this.value.length>=1){
           this.nextElementSibling.classList.add('fijar');
       }else{
        this.nextElementSibling.classList.remove('fijar');
       }
   });
    
}
