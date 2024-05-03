var arreglo = []

var largo = parseInt(prompt("digite la cantidad de elementos del arreglo"))

function construir(largo){
    arreglo.length = largo
}
//llamar funcion costruir 
constrtuir(largo)

for(let i = 0; i<10;1++){
    let NumeroAleatorio = Math.floor(Math.random() * 20) + 1
    arreglo[i] = NumeroAleatorio
}
