const btonverified = document.getElementById("verified");

btonverified.addEventListener('click', () => {
    const inputName = document.getElementById('name').value;
    const inputAge = document.getElementById('age').value;
    if (inputAge >= 18) {
        mostrarMensaje(inputName, inputAge);
    } else {
        mostrarMensaje(inputName, inputAge);

    }

})

function mostrarMensaje(nombre, edad) {
    if(edad>=18){
        alert(`la persona de nombre ${nombre} cumple con los requisitos de entrada su edad es ${edad}`)
    }

    else{
        alert(`la persona de nombre ${nombre} no cumple con los requisitos de entrada su edad es ${edad}`)
    }
    

}