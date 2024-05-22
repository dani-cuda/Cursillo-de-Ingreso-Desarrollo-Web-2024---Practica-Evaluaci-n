function estadoAlumno(notas){

  let auxNota1 = notas[0]
  let auxNota2 = notas[1]
  let auxNota3 = notas[2]
  
  let promedio = (auxNota1 + auxNota2 + auxNota3)/3
  
  if (promedio >= 0 && promedio < 4){
    alert("Su promedio es: " + promedio + ", usted esta LIBRE")
  }else if (promedio >= 4 && promedio < 7){
    alert("Su promedio es: " + promedio + ", usted esta REGULAR")
  }else if(promedio >= 7 && promedio <= 10){
    alert("Su promedio es: " + promedio + ", usted esta PROMOCIONADO")
  }else{
    alert("La nota ingresada no es valida, ingrese un valor entre 0 y 10")
  }
}

function cargarNota(){
  console.log("probando");
  let cantNotas = 0
  let notas = []
  while (cantNotas < 3){
     let auxNota = prompt("Ingrese una nota: ")
     let auxNotaInt = Number(auxNota)
     if(auxNotaInt < 0 || auxNotaInt > 10){
         prompt("Nota invalida, ingrese un valor entre 0 y 10")
     }else{
         notas.push(auxNotaInt)
         cantNotas +=1
     }
  }
  
  estadoAlumno(notas)
}

cargarNota()
