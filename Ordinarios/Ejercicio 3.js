
var a = new Array(3);
var b = new Array(3);
var multi_array = new Array();

for(var i = 0; i < 3; i++){
    let Datos_A = parseInt (prompt("ingrese el A"));
    a[i] = Datos_A;    
}
console.log("a:",a);

for(i = 0; i < 3; i++){
    let Datos_B = parseInt(prompt("Ingrese el B"));
    b[i] = Datos_B;
}
console.log("b:",b); 

let suma = 0;
for(i = 0; i < 3; i++){
    suma += (a[i]*b[i]);
}
console.log("producto interno entre a y b:",suma);

if (suma != 0) {
    console.log("A y B son ortagonales");
}else{
    console.log("A y B no son ortagonales");
}
