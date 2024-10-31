/*Alarma
Escriba un programa que pregunte al usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
Ejemplo de resultado : "Hora de dormir en 10 segundos".*/

function alarma(){
    let numero = parseInt(prompt("Ingrese la cantidad de segundos para la alarma"));
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, introduce un número válido de segundos.");
        return; 
    }
    alert(`Hora de dormir en ${numero} segundos.`);
    for (let index = numero; index > 0; index--) {
        setTimeout(() => {
            if (index === 1) {
                alert("¡La alarma ha sonado!");
            } else {
                console.log(`Quedan ${index - 1} segundos...`);
            }
        }, (numero - index) * 1000); // Calculamos el tiempo de espera
    }
}
alarma()