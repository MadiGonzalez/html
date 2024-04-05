var mensaje;
mensaje = "estoy leyendo el documento whileSwicht.js"
var elemento = document.querySelector('#header');
elemento.innerHTML= mensaje

var inicio = true

while (inicio == true){

function Suma(){
    var numero1=prompt("ingrese numero1")
    var numero2 =prompt("ingrese el numero 2")
    alert(parseInt(numero1)+parseInt(numero2))
}
function resta(){
    var numero1=prompt("ingrese el numero 1")
    var numero2=prompt("ingrese el numero 2")
    alert(parseInt(numero1)-parseInt(numero2))
}
function multiplicacion(){
    var numero1=prompt("ingrese el numero 1")
    var numero2=prompt("ingrese el numero 2")
    alert(parseInt(numero1)*parseInt(numero2)) 
}
function division(){
    var numero1=prompt("ingrese el numero 1")
    var numero2=prompt("ingrese el numero 2")
    alert(parseInt(numero1)/parseInt(numero2))
}


var respuesta= prompt("1. suma\n2.resta\n3.multiplicacion\n4.division\n5.cerrar.programa")
switch(parseInt(respuesta)){
    case 1:
        Suma()
    break
    case 2:
       resta()
    break
    case 3:
        multiplicacion()
    break
    case 4:
       division()
    break
    case 5:
        var inicio=false
}
}// fin while 


