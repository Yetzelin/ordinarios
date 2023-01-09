let Grupos = new Array(8);
let pares_equipos = new Array(4);

for(var b = 0; b < Grupos.length; b++){
	Grupos[b] = prompt("Ingresa al equipo "+(b+1)+":");
	console.log("Equipo "+(b+1)+":",Grupos[b]);
}

b = 0;
for(var i = 0; i < pares_equipos.length; i++){
	var equipo = new Array(2);
	for(var j = 0; j < equipo.length; j++){
		equipo[j] = Grupos[b];
		b++;
	}
	pares_equipos[i] = equipo;
}
console.log("Equipos anteriores:",pares_equipos);

alert("Cuartos");
i = 0;
var anteriores = new Array(4);
for(b = 0; b < Grupos.length; b+=2){
	let seleccion = prompt("a.-"+Grupos[b]+" - b.-"+Grupos[b+1]);
	if(seleccion == "a"){
		anteriores [i] = Grupos[b];
		
	}else if(seleccion == "b"){;
	 	ganador = Grupos [b+1];
	 	anteriores [i] = ganador;
	}
	i++;
}

b = 0; 
pares_equipos = new Array(2);
for(i = 0; i < pares_equipos.length; i++){	
	equipo = new Array(2);
	for(j = 0; j < equipo.length; j++){
		equipo[j] = anteriores[b];
		b++;
	}
	pares_equipos[i] = equipo;
}
console.log("Equipos anteriores:",pares_equipos);

alert("semifinal");

i = 0;
var ante_dos = new Array(2);
for(b = 0; b < anteriores.length; b+=2){
	let seleccion = prompt("a.-"+anteriores[b]+" - b.-"+anteriores[b + 1]);
	if(seleccion == "a"){
		ante_dos [i] = anteriores[b];
		
	}else if(seleccion == "b"){;
	 	ganador = anteriores[b+1];
	 	ante_dos [i] = ganador;
	}
	i++;
}

b = 0; 
pares_equipos = new Array(1);
for(i = 0; i < pares_equipos.length; i++){	
	equipo = new Array(2);
	for(j = 0; j < equipo.length; j++){
		equipo[j] = ante_dos[b];
		b++;
	}
	pares_equipos[i] = equipo;
}
console.log("Equipos anteriores:",pares_equipos);

alert("final");

i = 0;
var ganador; 
for(b = 0; b < ante_dos.length; b+=2){
	let seleccion = prompt("a.-"+ante_dos[b]+" - b.-"+ante_dos[b+1]);
	if(seleccion == "a"){
		ganador = ante_dos[b];
	}else if(seleccion == "b"){;
	 	ganador = ante_dos[b+1];
	}
	i++;
}


console.log("El ganador es:",ganador);

