document.querySelector('#header').innerHTML= "dias de la semana"
var dias
var elemento = document.querySelector('#header');
var mensaje 
var userInput = prompt("que dia es ")

function Lunes() {
    mensaje = "hoy es lunes"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red";
  
  }
  function Martes() {
    mensaje ="hoy es martes"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red";
  
  }
  function Miercoles() {
   mensaje = "hoy es miercoles"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red";
  
  }
  function Jueves() {
   mensaje ="hoy es jueves"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red";
  
  }
  function Viernes() {
    mensaje = "hoy es viernes"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red";
  
  }function Sabado() {
    mensaje = "hoy es sabado"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red";
  
  }function Domingo() {
    mensaje = "hoy es domingo"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red";
  
  }
  function Dia_invalido() {
    mensaje= "dia invalido"
    document.querySelector('#header').innerHTML = mensaje;
  } 
  dias = parseInt(userInput)/// con parseInt se convierte a entero
  switch(dias){

    case 1: 

        Lunes()
    break
    case 2:
        Martes()
    break
    case 3:
        Miercoles()
    break
    case 4:
        Jueves()
    break
    case 5:
        Viernes()
    break
    case 6:
        Sabado()
    break
    case 7:
        Domingo()
    break
 default:
     Dia_invalido()
    break
  } 