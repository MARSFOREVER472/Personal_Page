document.getElementById('contactForm').addEventListener('submit', function(event)
{
    event.preventDefault();
    const mensajeFormulario = document.getElementById('formMessage');
    mensajeFormulario.classList.remove('hidden');
    this.reset(); // ELIMINA TODAS LAS CELDAS DEL FORMULARIO.
});