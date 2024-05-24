var arreglo = []

var largo = parseInt(prompt("digite la cantidad de elementos del arreglo"))


function construir(largo) {
    // aqui se define el largo del arreglo
    arreglo.length = largo
}

//llamar funcion contruir
construir(largo)


// llenarArreglo
function llenaArreglo() {
    for (let i = 0; i < arreglo.length; i++) {
        let NumeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = NumeroAleatorio
    }
}



//aqui se llena el arreglo con numeros del 1 al 20
function ArregloPromedio() {
    let sumatotal = 0
    for (let index = 0; index < arreglo.length; index++) {

        sumatotal = sumatotal + arreglo[index]
    }

    console.log(sumatotal / arreglo.length)

}



//saca el porcentaje
function SumaValor(valor) {

    for (let index = 0; index < arreglo.length; index++) {
        arreglo[index] = arreglo[index] + valor


    }
    console.log("la suma de todo es" + arreglo)
}
//suma el procentaje

function sumaImPares() {
    let totalImpares = 0

    for (let index = 0; index < arreglo.length; index++) {

        if ((arreglo[index] % 2) != 0) {
            totalImpares = totalImpares + arreglo[index]
        }

    }
    console.log("El total de la suma con numeros impares es: ", totalImpares)
    return totalImpares
}
//suma el porcentaje impar
var arregloMayor = 0
function MayorArreglo() {
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] > valorMayor) {
            valorMayor = arreglo[index]
        }
    }
    return valorMayor
    console.log("El valor mas gande del arreglo es: ", valorMayor)
}
function MayorDiferencia() {
    let valorDiferenciaMayor = 0
    let diferencia = 0
    for (let index = 0; index <= arreglo.length; index++) {

        //sacar diferencia
        diferencia = arreglo[index] - arreglo[index + 1]
        //convertir en absoluto
        if (diferencia < 0) {
            diferencia = diferencia * -1
        }
        //aca preguntamos de la diferencia entre las celdas
        // si es vedadero guardamos esa diferencia y si es falso no hace nada
        if (diferencia > valorDiferenciaMayor) {
            valorDiferenciaMayor = diferencia
        }
    }
    console.log("El numero con mayor diferencia en el arreglo es: ", valorDiferenciaMayor)
}

function EncontrarElemento(valorNumero) {

    let encontrarNumero = false;
    for (let index = 0; index < arreglo.length; index++) {
        if (valorNumero == arreglo[index]) {
            encontrarNumero = true
        }

    }
    return encontrarNumero
    console.log("El resultado de la búsqueda fue: " + encontrarElemento)
}
function posicionElemento(valorNumero) {
    let encontrarNumero = false;
    let posicion = -1;
    for (let index = 0; index < arreglo.length; index++) {
        if (valorNumero == arreglo[index]) {
            encontrarNumero = true
            posicion = index;
            index = arreglo.length
        }
    }
    //return
    if (encontrarNumero) {
        return posicion
    } else {
        return -1
    }
    console.log("El numero a buscar si esta en el arreglo: " + posicionElemento(numeroConsultaPosicion))
}
function invertirArreglo() {
    let arregloInvertido = []
    arregloInvertido.length = arreglo.length
    let posicion = 0
    for (let index = 0; index >= arreglo.length; index--) {
        arregloInvertido[posicion] = arreglo[index];
        posicion++;

    }
    arreglo = arregloInvertido
    console.log("El arreglo fue invertido")
}
function insertarElemento(psicion, valor) {
    //llenar arreglo2 
    //no sirve hacerlo arreglo2=arreglo
    let arreglo2 = []
    arreglo2.length = arreglo.length
    for (let index = 0; index < arreglo.length; index++) {
        arreglo2[index] = arreglo[index]
    }
    for (let index = posicion; index < arreglo.length - 1; index++) {
        if (index == posicion) {
            arreglo[index] = valor
            arreglo[index + 1] = arreglo2[index]

        } else {
            arreglo[index + 1] = arreglo2[index]
        }
    }
    console.log(arreglo2)
}

function MostrarHileraArreglo() {
    console.log(arreglo)
}


var inicio = true

do {
    var resultado = prompt("1.llenarArreglo\n2.ArregloPromedio\n3.SumaValor\n4.SumaDeImpares\n5.MayorArreglo\n6.MayorDiferencia\n7.EncontrarElemento\n8.posicionElemento\n9. invertirArreglo\n10.insertarElemento\n11.MostrarHileraArreglo\n12FinalizarAplicacion")
    switch (parseInt(resultado)) {

        case 1:
            llenaArreglo()
        break
        case 2:
            ArregloPromedio()
        break
        case 3:
            let valor = prompt(parseInt("poanzz"))
            SumaValor(valor)
        break
        case 4:
            SumaDeImpares()
        break
        case 5:
            MayorArreglo()
        break
        case 6:
            MayorDiferencia()
        break
        case 7:
            EncontrarElemento()
        break
        case 8:
            posicionElemento()
        break
        case 9:
            invertirArreglo()
        break
        case 10:
            insertarElemento()
        break
        case 11:
            MostrarHileraArreglo()
        break
        case 12:
            inicio = false
        break

    }
} while (inicio)
