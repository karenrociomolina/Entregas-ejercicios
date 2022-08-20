/*Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes características, que esta debe contener: 
1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos. */


let form = document.querySelector(".form");
let input = document.querySelector("#contrasena");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let contrasena = input.value;
    let condicion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d*)[a-zA-Z\d*]{12,}$/;

    if (condicion.test(contrasena)) {
        alert("Gracias por ingresar correctamente su contraseña")
    }else{
        input.setCustomValidity("La contraseña ingresada debe contener 12 caracteres como mínimo, Una mayúscula, Una minúscula y no debe contener espacios vacíos.");
    }
});