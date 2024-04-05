document.querySelector('#header').innerHTML = "estoy leyendo Dowhile.js"

var i=0

do{

    i++
    console.log(i)

}while(i<5)

//fin while
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
var inicio = true
do{
 var respuesta= prompt("1. suma\n2.resta\n3.multiplicacion\n4.division\n5.cerrar.programa")
 switch (parseInt(respuesta)){
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
      inicio=false
      }
}while(inicio==true)