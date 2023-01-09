
let arreglo = new Array(3);

var Valor = 0;
for(var i = 0; i < 3; i++) {
	arreglo [i] = new Array(4);
	for (var j = 0; j < 4 ; j++) {
		arreglo [i][j] = Valor;
		Valor++;
	}
}
console.log(arreglo);


arreglo = new Array(3);
Valor = 0;
let aumento = 1;
for(i = 0; i < 3; i++) {
	arreglo [i] = new Array(4);
	for(j = 0; j < 4; j++){
		arreglo [i][j] = Valor;
		Valor = aumento + Valor;
		aumento += 2;
	}
}
console.log(arreglo);


arreglo = new Array(4);
for(i = 0; i < 4; i++){
	arreglo [i] = new Array(3);
	Valor = i;
	for(j = 0; j < 3; j++){
		arreglo[i][j] = Valor;
		Valor+=4;
	}
}
console.log(arreglo);


arreglo = new Array(3);
Valor = 0;
for(i = 0; i < 3; i++){
	arreglo [i] = new Array(3);
	for(j = 0; j < 4; j++){
		if(j < 3){
			arreglo[i][j] = Valor;
			Valor++;;
		}else{
			Valor++;
		}
	}
}
console.log(arreglo);


arreglo = new Array(4);
Valor = 11.5;
for(i = 0; i < 4; i++){
	arreglo [i] = new Array(3);
	for(j = 0; j < 3; j++){
		arreglo[i][j] = Valor;
		Valor--;
	}
}
console.log(arreglo);


arreglo = new Array(3);
Valor = 0;
for(var i = 0; i < 3; i++) {
	arreglo[i] = new Array(4);
	let columna = 100;
	for (var j = 0; j < 4 ; j++) {
		arreglo[i][j] = Valor + columna;
		Valor++;
		columna += 100;

	}
}
console.log(arreglo);


arreglo = new Array(3);
Valor = 0;
var fila = 100;
for(var i = 0; i < 3; i++) {
	arreglo[i] = new Array(4);
	for (var j = 0; j < 4 ; j++) {
		arreglo [i][j] = Valor + fila;
		Valor++;
	}
	fila += 100;
}
console.log(arreglo);