//Ejercicio 1
let precioProducto = 100;
let ivaProducto = 21;
let precioTotalProducto = precioProducto + precioProducto * (ivaProducto / 100);
console.group("Ejercicio 1:");
console.log(precioTotalProducto);
console.groupEnd();

//Ejercicio 2
let ladoCuadrado = 4;
let perimetroCuadrado = 4 * ladoCuadrado;
let areaCuadrado = ladoCuadrado * ladoCuadrado;

console.group("Ejercicio 2:");
console.log("El perimetro del cuadrado es " + perimetroCuadrado);
console.log("El area del cuadrado es " + areaCuadrado);
console.groupEnd();

//Ejercicio 3
function obtenerDivision(){
    let num1 = document.getElementById("numdiv1").value;
    let num2 = document.getElementById("numdiv2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    console.group("Ejercicio 3: ");
    if (num1 % num2 != 0){
        console.log("Error")
    }else{
        console.log(num1 / num2)
    }
    console.groupEnd()
}

//Ejercicio 4
function obtenerDiferencia(){
    let num1 = document.getElementById("numdif1").value;
    let num2 = document.getElementById("numdif2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    console.group("Ejercicio 4: ");
    if (num1 >= num2 ){
        console.log(num1 - num2)
    }else{
        console.log(num2 - num1)
    }
    console.groupEnd()
}

//Ejercicio 5
let precios = new Array();
let contProductos40 = 0;
function añadirProducto(){
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;

    precio = parseFloat(precio);
    cantidad = parseInt(cantidad);

    if (precio > 40){
        contProductos40 += cantidad;
    }
    let precioTotal =  precio * cantidad;

    precios.push(precioTotal);

    console.group("Ejercicio 5: ");
    console.log(precios);
    console.groupEnd();

    
}
function calcularVenta(){
    let totalVenta = 0
    for (let precio of precios) {
        totalVenta += precio
    }
    if (contProductos40 > 9) {
        totalVenta = totalVenta - totalVenta * 0.15
    }
    precios = [];
    console.group("Ejercicio 5: ");
    console.log(totalVenta)
    console.groupEnd();
}
//Ejercicio 6
function validarNumero(){
    let numero = 0;
    while (numero < 1 || numero > 5){
        numero = parseInt(prompt("Introduce un número entre 1 y 5:"));
    }
    console.group("Ejercicio 6:")
    console.log("Numero correcto")
    console.groupEnd()
}
//Ejercicio 7
function esPrimo(){
    let numero = document.getElementById("numeroPrimo").value;
    let cont = 2;
    let esPrimo = true;
    if (numero > 0){
        while (numero > cont && esPrimo){
            if (numero % cont == 0){
                esPrimo = false;
            }
            cont +=1;
        }
        if(esPrimo){
            console.group("Ejercicio 7:")
            console.log("El numero introducido es Primo")
            console.groupEnd()
        }else{
            console.group("Ejercicio 7:")
            console.log("El numero introducido no es Primo")
            console.groupEnd()
        }
    }else{
        console.group("Ejercicio 7:")
        console.log("El numero introducido no es Primo")
        console.groupEnd()
    }
}
//Ejercicio 8
function numerosPares(){
    let numero = 1;
    let numerosPares = new Array();
    while (numero != 0){
        numero = parseInt(prompt("Introduce un número par:"));
        if (numero % 2 == 0 && numero != 0){
            numerosPares.push(numero)
        }
    }
    let maximo = Math.max(...numerosPares)
    let minimo = Math.min(...numerosPares)
    console.group("Ejercicio 8:")
    console.log("Maximo:",maximo)
    console.log("Minimo:",minimo)
    console.groupEnd()
}
//Ejercicio 9
function diaSemana(){
    let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
    let numeroDia = document.getElementById("numeroDia").value;

    numeroDia = parseInt(numeroDia);

    if (numeroDia >= 0 && numeroDia<=6){
        console.group("Ejercicio 9:")
        console.log("Dia de la Semana:",dias[numeroDia])
        console.groupEnd()
    }else{
        console.group("Ejercicio 9:")
        console.log("Numero de dia invalido")
        console.groupEnd()
    }
}
//Ejercicio 10
function sumaLista(lista){
    suma = 0;
    for (let item of lista){
        suma += item;
    }
    console.group("Ejercicio 10:")
    console.log(lista)
    console.log(suma)
    console.groupEnd()
}
//Ejercicio 11
function esVocal(letra){
    const vocales = ['a','e','i','o','u']
    let esVocal = false
    letra = letra.toLowerCase();
    if (letra.length == 1) {
        for (let vocal of vocales){
            if (vocal == letra){
                esVocal = true
            }
        }
    }else{
        console.group("Ejercicio 11:")
        console.log(esVocal)
        console.groupEnd()
    }
    console.group("Ejercicio 11:")
    console.log(esVocal)
    console.groupEnd()
    return esVocal;
}
//Ejercicio 12
function mostrarLista(lista){
    let stringLista = lista.join("-")
    console.group("Ejercicio 12:")
    console.log(lista)
    console.log(stringLista)
    console.groupEnd()
}
//Ejercicio 13
function consultarPrecio(producto){
    let precio = 0;
    let productosYPreacios = {
        "raton" : 20,
        "monitor" : 120,
        "teclado" : 30
    }
    producto = producto.toLowerCase();
    if (producto in productosYPreacios){
        precio = productosYPreacios[producto]
        console.group("Ejercicio 13:")
        console.log(producto)
        console.log(precio)
        console.groupEnd()
    }else{
        console.group("Ejercicio 13:")
        console.log("El producto introducido no es una opcion valida")
        console.groupEnd()
    }
}