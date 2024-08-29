function asignarEventos(){
    let elBotonForm = document.getElementById("btnForm");
    elBotonForm.addEventListener('click', mostrarMensaje);
}

function mostrarMensaje(){
    // limpiar los campos
    let elEmail = document.getElementById('emailContacto');
    elEmail.value = "";
    let elTelefono = document.getElementById("telefonoContacto");
    elTelefono.value = "";

    alert('Sus datos fueron registrados');

}
function mostrarcontacto(){
    let elcontacto = document.getElementById("btnsimple");  

}