/* Palíndromo
Escriba un programa que solicite una palabra o frase (puede estar en mayúsculas, tener espacios y puntuación). Determine si la frase o palabra es un palíndromo o no. Ignore la puntuación, los espacios y las letras mayúsculas.*/
alert("Ejercico 4")
const entrada = prompt("Ingrese su palabra")
function palindromo(frase) {
    const palabra = frase
        .replace(/[^a-zA-Z0-9]/g, '') // Eliminamos los caracteres que no son admitidos
        .toLowerCase(); // Convertimos todos los caracteres en minusculas
    for (let i = 0; i < palabra.length / 2; i++) { //Se inicia un bucle que va desde 0 hasta la mitad de la longitud de la palabra
        if (palabra[i] !== palabra[palabra.length - 1 - i]) { // Si los caracteres no son iguales, significa que la cadena no es un palíndromo.
            return false; // Regresamos falso si la condicion no se cumple
        }
    }
    return true; // Es un palíndromo
}

if (palindromo(entrada)) {
    alert(`"${entrada}" es un palíndromo.`);
} else {
    alert(`"${entrada}" no es un palíndromo.`);
}