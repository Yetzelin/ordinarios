//Ejercicio 7
let soduko = [
  [4, 2, 6,  5, 7, 3,  6, 4, 9],
  [8, 5, 7,  2, 9, 2,  1, 7, 5],
  [1, 3, 9,  4, 6, 1,  2, 8, 3],
  
  [9, 7, 1,  3, 3, 7,  8, 9, 6],
  [5, 4, 3,  7, 4, 5,  7, 2, 1],
  [6, 8, 2,  1, 6, 9,  5, 3, 4],
  
  [7, 9, 4,  6, 7, 4,  3, 6, 8],
  [2, 6, 5,  8, 2, 6,  9, 1, 7],
  [3, 1, 8,  9, 1, 8,  4, 5, 2]];

console.log(soduko)

//comparacion 
var numero = 0;
var se_repiten = false;
for(i = 0; i < 9; i++){
	let x = 1
	for(j = 0; j < 9; j++){
		numero = soduko[i][j];
		for (let linea = x; linea < 9; linea++) {
			if (numero == soduko[i][linea]) {
				se_repiten = true;
			}
		}
		x++;
	}
}

numero = 0;
for(j = 0; j < 9; j++){
	let y = 1
	for(i = 0; i < 9; i++){
		numero = soduko[i][j];
		for (let columna = y; columna < 9; columna++) {
			if (numero == soduko[columna][j]) {
				se_repiten = true;
			}
		}
		y++;
	}
}

if(se_repiten == true){
	console.log("la solucion no es correcta");
}else{
	console.log("La solucion es correcta");
}