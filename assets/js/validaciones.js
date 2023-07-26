
function habilitarBoton() {
    const nombreapellido = document.getElementById('nombreapellido').value;
    const correoelectronico = document.getElementById('correoelectronico').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (nombreapellido && correoelectronico && asunto && mensaje) {
        document.getElementById('envio').removeAttribute('disabled');
    } else {
        document.getElementById('envio').setAttribute('disabled', 'true');
    }
}
        
        
     