function estadoAlumno(nota){
  let auxNota = Number(nota)

  if (auxNota >= 0 && auxNota < 4){
    alert("La nota ingresada es: " + auxNota + ", usted esta LIBRE")
  }else if (auxNota >= 4 && auxNota < 7){
    alert("La nota ingresada es: " + auxNota + ", usted esta REGULAR")
  }else if(auxNota >= 7 && auxNota <= 10){
    alert("La nota ingresada es: " + auxNota + ", usted esta PROMOCIONADO")
  }else{
    alert("La nota ingresada no es valida, ingrese un valor entre 0 y 10")
  }
}

function cargarNota(){
  let nota = prompt("Ingrese una nota: ")
  estadoAlumno(nota)
}

cargarNota()