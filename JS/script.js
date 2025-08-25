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
    
    // Feature List Animation
    const featureItems = document.querySelectorAll('.feature-item');
    if (featureItems.length > 0) {
        featureItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                item.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 100);
            }, index * 150);
        });
    }
    
    // Statistics Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        statNumbers.forEach((stat, index) => {
            setTimeout(() => {
                stat.style.transform = 'scale(0.8)';
                stat.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    stat.style.transform = 'scale(1)';
                }, 200);
            }, index * 200);
        });
    }
    
    // Logo Animation
    const logoShape = document.querySelector('.logo-shape');
    if (logoShape) {
        logoShape.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(5deg) scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        logoShape.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    }
    
    // Crest Logo Animation
    const crestLogo = document.querySelector('.crest-logo');
    if (crestLogo) {
        crestLogo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        crestLogo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});
