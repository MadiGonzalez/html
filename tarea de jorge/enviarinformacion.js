function enviarFormulario() {
const nombre = document.getElementById("nombre").value;







const xmlData = `<usuario>
<nombre>${nombre}</nombre>`
;

localStorage.setItem('usuarioXML', xmlData)


window.location.href = 'visualizar.html';

return false;
}