var elemento = document.querySelector('#header');"estoy leyendo arrays"

var cesta = ["fresa","pera" ,"cereza"]

console.log

cesta[0]="Uva"//para modificar el valor de una posicion 
console.log(cesta)

console.log(cesta.length)//ver el tamaño del array

cesta.push("naranja")//agrega un elemento a la array
console.log(cesta)

cesta.pop()//elimina el ultimo elemento del array
console.log(cesta)

cesta.push("limon")
cesta.push("piña")
console.log(cesta)
/*El segundo parametro (1) indica cuantos elementos 
eliminar desde el indice proporcionado(2)

*/
cesta.splice(2,2)
console.log(cesta)


cesta.splice([2])

var cestaVacia=[]//crea un array vacio




var opcion =prompt("1.ver elementos de la cesta\n2.agregar una fruta en la cesta\n3. quitar fruta de la cesta ")