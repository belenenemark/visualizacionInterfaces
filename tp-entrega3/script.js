fetch("https://belenenemark.github.io/visualizacionInterfaces/tp-entrega3/pruebapartial.html").then(
  function(response){
    response.text().then(
  function(texto){
    document.querySelector("#partial").innerHTML = texto;
  }
);
  }
);
