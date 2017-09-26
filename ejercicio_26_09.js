/*
calcular el sueldo  semanal de un trabajador con base en las horas que trabaja
ej: Carol gana 10000 por hora y trabaja 20 horas a la semana 
200000
20*10000
*/

function salaryWeek(hours, payment){
	var salary=hours*payment;
	return salary;
}// puede ser return hours*payment; eso cumple con lo mismo sin necesidad de crear una variable

/* calcular la cantidad de digitos de un numero, por ejemplo, 1986, debera retornan 4 
*/

function numberOfDigits(number){
	//que necesitamos para contar posiciones, con un for 
	var counter=0;
	var digits=number.toString();
	 // "1986"
    for(var i=0; i<digits.length; i++){
    	counter++;
    	}
    	return counter;
	//totring es parse int pero al reves es para convertir un numero a un string
}
//i+==2 .......i = i+2
//i++ .......i = i+1
//para llamarlo en la consola coloco el nombre de la funcion eje: numberOfDigits(1986);y luego como resultado me daria 4

//como sabr si una palabra es palindrome en js

function palindrome(word){
//necesita un puro parametro porque es la misma palabra dada vuelta no son palabras distintas
var long = word.length;
   for(var i=0; i<long; i++){
   	if(word[i] !== word[long-1-i]){
   		return false;
   		//el corchete me va a tomar la posicion 
   	}
   }
   return true;
}



/*"alexandra".split("") 
(9) ["a", "l", "e", "x", "a", "n", "d", "r", "a"]
"alexandra".split("").reverse()
(9) ["a", "r", "d", "n", "a", "x", "e", "l", "a"]
"alexandra".split("").reverse().join("")
"ardnaxela"
*/