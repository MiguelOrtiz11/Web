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

