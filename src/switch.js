document.querySelector('#header').innerHTML= "estoy leyendo el documento switch"
var fruta
var mensaje 
var userIpunt = prompt("ingrese el numero de su fruta")

function jugo_de_fresas() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red";
  
  }
  function jugo_de_naranja() {
    mensaje = "batir naranjas y mandarinas"
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "orange";
  
  }
  function servir_vaso_de_agua() {
    mensaje= "servir vaso de agua"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "blue";
  }
  fruta= parseInt(userIpunt)/// con parseInt se convierte a entero
  switch(fruta){
     case 1: 
     mensaje = "batir fresas"
        jugo_de_fresas()
    break
    case 2:
    case 3:
        jugo_de_naranja()
    break
 default:
    servir_vaso_de_agua()
break
}