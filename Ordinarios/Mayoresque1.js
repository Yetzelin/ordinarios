
let Cantidad = parseInt(prompt("ingresa la cantidad de numeros para leer"));
var arr = new Array(Cantidad);
var i = 0;
while(i < arr.length){
    let Numeros = parseInt(prompt("Ingrese los numeros")); 
    arr[i] = Numeros;
    i++
}

let X = parseInt(prompt("Ingresa valor con el cual comparar"));
var num_mayor = 0;
i = 0;
while(i < arr.length){
    if(arr[i] > x){
        num_mayor++;
    }
    i++;
}
console.log("De tu lista de numeros ingresados", num_mayor,"valores son mayor a ",X);
