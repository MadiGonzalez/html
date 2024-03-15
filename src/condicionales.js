var mensaje;
var hay_fresas = false;
var elemento = document.querySelector('#header');

function jugo_de_fresas() {
  window.alert(mensaje);
  document.querySelector('#header').innerHTML = mensaje;
  document.querySelector('#header').style.color = "red";

}

function servir_vaso_de_agua() {
  window.alert(mensaje);
  elemento.innerHTML = mensaje;
  elemento.style.color = "blue";
}

if (hay_fresas) {
  mensaje = 'batir las fresas';
  jugo_de_fresas();
}else{
  mensaje = 'sirvame el vaso con el agua';
  servir_vaso_de_agua();
}


