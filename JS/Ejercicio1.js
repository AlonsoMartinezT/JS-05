/*Perfil de usuario
Escriba un programa que le solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que la salida para las películas debe agregar un pequeño mensaje como: 'La película {film} es una de mis favoritas'. */

// Función para recopilar información del usuario
function perfilUsuario(){
    alert("Ejercico 1")
    console.log("PERFIL DE USUARIO");
    const nombreUsuario = prompt("Ingrese su nombre de usuario");
    const edad = prompt("Ingrese su edad");
    const peliculas = []
    let continuar = true
    while (continuar) {
        const pelicula = prompt("Ingrese su pelicula favorita o dejalo vacio para ya no agregar pelicula")
        if (pelicula) {
            peliculas.push(pelicula)
        }else{
            continuar = false
        }
    }
    console.log("INFORMACION DEL USUARIO")
    console.log(`Su nombre de usuario es: ${nombreUsuario}`);
    console.log(`Su edad es: ${edad}`);
    peliculas.forEach(pelicula=>{console.log(`Su pelicula favorita  es: ${pelicula}`)});
}

