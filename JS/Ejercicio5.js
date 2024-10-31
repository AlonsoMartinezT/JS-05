/*Factorial
Escriba un programa que solicite un número entero n . Donde  1 <= nResuelva esto usando recursión.*/

function calcularFactorial() {
    console.log("FACTORIAL")
    const n = parseInt(prompt("Introduce un número entero (1 o mayor):"));
    function factorial(n) {
        if (n === 1) { // si el numero es igual a 1 
            return 1;
        }
        return n * factorial(n - 1);  // usamos la recursividad
    }

    const resultado = factorial(n);
    alert(`El factorial de ${n} es ${resultado}.`);
    console.log(`El factorial de ${n} es ${resultado}`);

}

