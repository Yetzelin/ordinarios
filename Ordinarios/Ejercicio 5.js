var TamCu = parseInt(prompt("Tamaño del cuadrado"));
var cuadrado = new Array(TamCu);
let numeros = new Array(Math.pow(TamCu,2));
b = 0;
for(var i = 0; i < TamCu; i++){
	cuadrado [i]= new Array(TamCu);
	for(var j = 0; j < TamCu; j++){
		numeros[b] = parseInt(prompt("Numeros de la fila"+(i+1)+":"));
		cuadrado [i][j] = numeros[b];
		b++;
	}
}
console.log(cuadrado);
let son_iguales = true;


let suma_de_filas = new Array(TamCu);
for(i = 0; i < TamCu; i++){
	var suma = 0;
	for(j = 0; j < TamCu; j++){
		suma+=cuadrado[i][j];
	}
	suma_de_filas[i] = suma; 
}
console.log(suma_de_filas);

for(i = 1; i < TamCu; i++){
	if(suma_de_filas[0] != suma_de_filas[i]){
		son_iguales = false;
	}
}

//suma de columnas
let suma_de_columnas = new Array(TamCu);
for(j = 0; j < TamCu; j++){
	suma = 0;
	for(i = 0; i < TamCu; i++){
		suma+=cuadrado[i][j];
	}
	suma_de_columnas[j] = suma;
}
console.log(suma_de_columnas);

for(i = 1; i < TamCu; i++){
	if(suma_de_columnas[0] != suma_de_columnas[i]){
		son_iguales = false;
	}
}

//suma de diagonal frente atras
let diagonal_frente_atras = 0;
j = 0;
for(i = 0; i < TamCu; i++){
	diagonal_frente_atras = cuadrado[i][j] + diagonal_frente_atras;
	j++;
}

//suma de diagonal atras frente
let diagonal_atras_frente = 0;
j = TamCu;
for(i = 0; i < TamCu; i++){
	j--;
	diagonal_atras_frente = cuadrado[i][j] + diagonal_atras_frente;
}

if (diagonal_atras_frente != diagonal_frente_atras) {
	son_iguales = false;
}

//numeros consecutivos
if(son_iguales == true){
	console.log("Si es un cuadrado magico");
}else{
	console.log("No es un cuadrado magico");
}

numeros.sort();
let consecutivos = true;
for (b = 0; b < numeros.length - 1; b++) {
	if (numeros[b] + 1 != numeros[b+1]){
		consecutivos = false; 
		break;
	}
}
if(consecutivos == true){
	console.log("El arreglo tiene numeros consecutivos:");
}else{
	console.log("El arreglo no tiene numeros consecutivos:");
}

