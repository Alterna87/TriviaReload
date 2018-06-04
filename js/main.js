
//Variables globales
var c = 0;
var i = 0;
//Obtener el nombre y mostrarlo
function obtener() {
var name = document.getElementById("name").value;


if (name == "") {
  document.getElementById('validation').innerHTML = "Ingresa un nombre válido";
  } else {
  document.getElementById('nombre').innerHTML = "Bienvenid@: "+name;
  document.getElementById('solicitarName').style.display ="none";
  document.getElementById('validation').style.display = "block";
  }

}

function validar(e) {
  event.preventDefault(e);
  var respons = document.getElementById("respons").value.toUpperCase();

  switch (respons) {
    case "SI":
    document.getElementById('pregunta1').style.display ="block";
    document.getElementById('validation').style.display = "none";
break;
    case "NO":
    document.getElementById('validation').innerHTML = "Una lastima!, hasta la próxima!!";
document.getElementById('validation').style.display = "block";
break;
default:
    break;
  }
}

function questionOne(e) {
  event.preventDefault(e);
var question1 = document.getElementById("question1").value;
if (question1 == 2) {
  document.getElementById('oneC').innerHTML = "¿Cuál es el animal que puede durar hasta 10 días sin beber una gota de agua? \n Respuesta 2.- Camello";
c++;
} else {
  document.getElementById('oneI').innerHTML = "¿Cuál es el animal que puede durar hasta 10 días sin beber una gota de agua? \n Respuesta 2.- Camello"
  i++;
}
document.getElementById('pregunta2').style.display = "block";
document.getElementById('pregunta1').style.display = "none";
}

function questionTwo(e){
  event.preventDefault(e);
  var question2 = document.getElementById("question2").value;
  if (question2 == 1) {
    document.getElementById('twoC').innerHTML ="¿Cuál es la capital de China? \n Respuesta 1.- Pekin";
  c++;
  } else {
    document.getElementById('twoI').innerHTML ="¿Cuál es la capital de China? \n Respuesta 1.- Pekin";
    i++;
  }
  document.getElementById('pregunta3').style.display = "block";
  document.getElementById('pregunta2').style.display= "none";
}

function questionThree(e){
  event.preventDefault(e);
  var question3 = document.getElementById("question3").value;
  if (question3 == 2) {
  document.getElementById('threeC').innerHTML ="¿Cuál de los siguientes monumentos es más antiguo? \n Respuesta 2.-Piramide de Guiza";
  c++;
  } else {
    document.getElementById('threeI').innerHTML ="¿Cuál de los siguientes monumentos es más antiguo? \n Respuesta 2.-Piramide de Guiza";
    i++;
  }
document.getElementById('pregunta3').style.display= "none";
document.getElementById('correct').style.display ="block";
document.getElementById('incorrect').style.display = "block";

document.getElementById('puntajeC').innerHTML = "Correctas: " +c;
document.getElementById('puntajeI').innerHTML= "Incorrectas: " +i;

}
