//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let nombreCompleto;
let eMail;
let telefono;
let edad;

let usuario = sessionStorage.getItem('usuLog');

document.getElementById("nomPerfil").innerHTML = '<h6 class="f-w-600" id="nomPerfil">' + usuario + '</h6>';

function mostrarDatos() {
    let usu = JSON.parse(sessionStorage.getItem('profile'));

    document.getElementById('impNombreApellido').value = usu.nomCom;
    document.getElementById('impEmail').value = usu.correo;
    document.getElementById('impTel').value = usu.tel;
    document.getElementById('impEdad').value = usu.anios;
}

function cargarDatos() {
    nombreCompleto = document.getElementById('impNombreApellido').value;
    eMail = document.getElementById('impEmail').value;
    telefono = document.getElementById('impTel').value;
    edad = document.getElementById('impEdad').value;

    let usuario = {
        nomCom: nombreCompleto,
        correo: eMail,
        tel: telefono,
        anios: edad
    };

    sessionStorage.setItem('profile', JSON.stringify(usuario));
}


document.addEventListener("DOMContentLoaded", function(e) {

    if (sessionStorage.getItem("profile") == null) {

        document.getElementById('btnGuardar').disabled = false;

        document.getElementById("btnGuardar").addEventListener('click', (evento) => {

            cargarDatos();

            location.reload();

        });

    } else {

        document.getElementById('btnGuardar').disabled = true;

        mostrarDatos();



        document.getElementById('btnModificar').disabled = false;


        document.getElementById("btnModificar").addEventListener('click', (evento) => {
            cargarDatos();
            location.reload();
        });


    }

});