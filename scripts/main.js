function enviar() {
    alert("Documento enviado");
    var nomeCompleto = "Larissa";
    var elemento = document.querySelector('p');
    if (elemento) {
        elemento.innerHTML = elemento.innerHTML.replace('#cliente_razao#', nomeCompleto);
    }

}