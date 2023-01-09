
let Datos = parseInt(prompt("¿Cuantos datos a ingresar?:")), calificaciones = new Array(Datos);

for(var i = 0; i < calificaciones.length; i++){
    let calificacion =parseFloat(prompt("Calificaciones"));
    calificaciones[i] = calificacion;       
    console.log("dato"+(i+1)+":",calificaciones[i]);
}
var promedio = 0;

for(i = 0; i <= calificaciones.length; i++){
    if(calificaciones[i] >= 6){
        promedio++;
    }
}
console.log(promedio,"datos son mayor al promedio");

