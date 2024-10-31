/*Matriz plana
Escriba un programa que tome la siguiente matriz anidada y la aplane (la convierta en una matriz unidimensional). Utilice cualquier tipo de algoritmo que desee, como devoluciones de llamadas, recursión, etc.
deje que multiDimension = [1, [2, 3, [4, 5, [6]]]];*/
const multiDimension = [1, [2, 3, [4, 5, [6]]]];
const matrizAplanada = matrizPlana(multiDimension);
function matrizPlana(matriz) {
    alert("Ejercicio 6")
    console.log("MATRIZ PLANA")
    let resultado = [];
    function aplanar(elemento) { // Función auxiliar para la recursión
        if (Array.isArray(elemento)) { // Si el elemento es una matriz, llamamos a la función recursivamente
            elemento.forEach(aplanar);
        } else {
            resultado.push(elemento); // Si no es una matriz, lo agregamos al resultado
        }
    }
    aplanar(matriz); 
    return resultado;
}
console.log(matrizAplanada);


