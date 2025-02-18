
      // Capturamos el formulario
      const contactForm = document.getElementById('contactForm');

      // Escuchamos el evento submit
      contactForm.addEventListener('submit', function (event) {
        // Mostramos la alerta de confirmación
        const confirmation = confirm('¿Estás seguro de que deseas enviar el mensaje?');
        if (!confirmation) {
          // Cancelamos el envío del formulario si el usuario elige "Cancelar"
          event.preventDefault();
        }
      });