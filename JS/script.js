document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('#password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle icon
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
    
    // Form submission
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;
            const remember = document.querySelector('#remember').checked;
            
            // Basic validation
            if (!username || !password) {
                alert('Por favor, completa todos los campos');
                return;
            }
            
            // Simulate login process
            console.log('Login attempt:', { username, password, remember });
            
            // Show loading state
            const submitBtn = document.querySelector('.login-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Iniciando...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('¡Bienvenido a EduSystem Pro!');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Input focus effects
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Remember me functionality
    const rememberCheckbox = document.querySelector('#remember');
    if (rememberCheckbox) {
        // Load saved preference
        const savedRemember = localStorage.getItem('edusystem_remember');
        if (savedRemember === 'true') {
            rememberCheckbox.checked = true;
        }
        
        // Save preference on change
        rememberCheckbox.addEventListener('change', function() {
            localStorage.setItem('edusystem_remember', this.checked);
        });
    }
});
