/* El DT de los infantiles del equipo de fútbol desea saber
el promedio de la edad de los chicos. La edad de los chicos 
va de 3 a 7 años. Las edades son cargadas al azar (use la función aleatorio
(menorValor, mayorValor), es decir aleatorio(3,7))
Muestre todas las edades y el promedio de las mismas */

let CantidadAlumnos: number = Number(prompt("Ingrese la cantidad de alumnos"));
let ArrEdades: number[] = new Array(CantidadAlumnos);
let SumaEdad: number = 0;
let PromedioEdad: number = 0;

function aleatorio(MenorValor: number, MayorValor: number): number {
  let EdadAleatoria = Math.round(
    Math.random() * (MayorValor - MenorValor) + MenorValor
  );
  return EdadAleatoria;
}

function PromedioEdades(cantidad: number): number {
  for (let i: number = 0; i < CantidadAlumnos; i++) {
    ArrEdades[i] = aleatorio(3, 7);
    SumaEdad += ArrEdades[i];
  }
  console.log(ArrEdades);
  PromedioEdad = SumaEdad / CantidadAlumnos;
  console.log(PromedioEdad);
  return PromedioEdad;
}
PromedioEdades(CantidadAlumnos);
