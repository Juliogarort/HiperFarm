'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el formulario dentro del modal
    const loginForm = document.querySelector('#loginModal form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const loginError = document.getElementById('loginError'); // Elemento para mostrar el error

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evitar el envío por defecto

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            const rememberMe = rememberMeCheckbox.checked;

            console.log(`Usuario: ${username}, Contraseña: ${password}`); // Depuración

            // Validar usuario y contraseña
            if (username === 'usuario' && password === 'usuario') {
                console.log('Credenciales correctas'); // Depuración

                // Éxito: cerrar modal y actualizar UI
                $('#loginModal').modal('hide');
                
                // Guardar en localStorage si "recordarme" está marcado
                if (rememberMe) {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('username', username);
                }

                // Actualizar la interfaz
                updateUIForLoggedUser(username);
            } else {
                console.log('Credenciales incorrectas'); // Depuración

                // Error: mostrar mensaje de error en la página
                loginError.style.display = 'block'; // Mostrar mensaje de error
                passwordInput.value = ''; // Limpiar solo el campo de contraseña
                usernameInput.focus(); // Focar en el campo de usuario para corregir el error
            }
        });
    }

    // Función para actualizar la interfaz cuando el usuario está logueado
    function updateUIForLoggedUser(username) {
        const loginButton = document.querySelector('[data-target="#loginModal"]');
        if (loginButton) {
            loginButton.textContent = `Bienvenido, ${username}`;
            loginButton.removeAttribute('data-toggle');
            loginButton.removeAttribute('data-target');
        }
    }

    // Verificar si el usuario ya está logueado al cargar la página
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const savedUsername = localStorage.getItem('username');
    if (isLoggedIn === 'true' && savedUsername === 'usuario') {
        updateUIForLoggedUser(savedUsername);
    }
});


// --------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            localStorage.clear();
            sessionStorage.clear();
            alert('Illooo quieto paraoo!! Zeguro que quiere cerra zeción??.');
            window.location.href = 'index.html';
        });
    } else {
        console.error('El botón de cerrar sesión no se encontró en el DOM.');
    }
});

  // --------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    const togglePasswordButton = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    if (togglePasswordButton) {
        togglePasswordButton.addEventListener('click', function () {
            const icon = this.querySelector('i');

            // Alternar el tipo de input entre "password" y "text"
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                icon.classList.remove('bi-eye-slash');
                icon.classList.add('bi-eye');
            } else {
                passwordField.type = 'password';
                icon.classList.remove('bi-eye');
                icon.classList.add('bi-eye-slash');
            }
        });
    }
});
