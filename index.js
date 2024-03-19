function toggleSubOptions(id) {
    var subOptions = document.getElementById(id);
    subOptions.classList.toggle("active");
}

function capturarDatos() {
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    console.log("Correo Electrónico:", email);
    console.log("Contraseña:", password);
}


function validarYEnviar() {
    // Expresiones regulares para validar los campos
    var nombresRegex = /^[a-zA-Z\s]+$/;
    var correoRegex = /^\S+@\S+\.\S+$/;
    var numeroRegex = /^\d+$/;

    // Obtener los valores de los campos del formulario
    var nombres = document.getElementById("nombres").value.trim();
    var apellidos = document.getElementById("apellidos").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var numero = document.getElementById("numero").value.trim();
    var estrato = document.getElementById("estrato").value.trim();
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var grupoSanguineo = document.getElementById("grupoSanguineo").value;

    // Validar los campos
    if (!nombresRegex.test(nombres)) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (!nombresRegex.test(apellidos)) {
        alert("Por favor, ingresa un apellido válido.");
        return;
    }
    if (!correoRegex.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }
    if (!numeroRegex.test(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    // Si todos los campos son válidos, mostrar la información en un alert
    var mensaje = "Registro exitoso:\n\n" +
                  "Nombres: " + nombres + "\n" +
                  "Apellidos: " + apellidos + "\n" +
                  "Correo Electrónico: " + correo + "\n" +
                  "Número: " + numero + "\n" +
                  "Estrato: " + estrato + "\n" +
                  "Fecha de Nacimiento: " + fechaNacimiento + "\n" +
                  "Grupo Sanguíneo: " + grupoSanguineo;
    alert(mensaje);
}

function cancelarRegistro() {
    // Simplemente redirecciona a la página principal o cualquier otra página deseada
    window.location.href = "index.html";
}
