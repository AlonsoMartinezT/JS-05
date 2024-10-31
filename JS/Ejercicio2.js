/* Número más alto
Escribe un programa que pida 10 números. Utilizando operadores lógicos y cualquier otra función o estructura de JavaScript que hayas visto antes, determina y genera el mayor de esos números.*/

function numeroAlto(){
    alert("Ejercico 2")
    console.log("NUMERO MAS ALTO")
    let numeroMaximo = -Infinity; // Significa que cualquier numero que ingrese sera mayor que este valor
    for (let index = 0; index < 10; index++) {
        let input = prompt(`Introduce el número ${index + 1}:`)
        let numero = parseFloat(input) // Se convierte a un numero
        if (numero > numeroMaximo) { // Si el numero ingresado es mayor a numeroMaximo, numero tomara su lugar
            numeroMaximo = numero // Si la condición  es verdadera, se actualiza numeroMaximo con el nuevo número
        }
    }
    alert(`EL numero maximo es: ${numeroMaximo}`);
    console.log((`EL numero maximo es: ${numeroMaximo}`));
}
