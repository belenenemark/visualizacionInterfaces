let hiddens=document.querySelectorAll(".hidden");
window.addEventListener("load",function(){
	let container = document.getElementById('loading');
	setTimeout(function() {
	container.classList.add('cerrar');
		
  	// despueés de cargar le devolvemos el scroll
	  setTimeout(function(){
		document.body.style.overflow= "visible";
		container.classList.add('hidden');
		},2000);
	}, 3000);
});

document.querySelector("body").addEventListener("wheel", functionScroll);

function functionScroll() {
	let animacion=document.querySelector(".animado");
	let scrollTop=document.documentElement.scrollTop;
	let scrollHeight = document.documentElement.scrollHeight;
	let clientHeight = document.documentElement.clientHeight;
	let windowHeight = scrollHeight - clientHeight;
	let porcentaje = scrollTop / windowHeight *100;
	
	animacion.style.left= porcentaje+'%';
}