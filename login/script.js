document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Credentials
    const validUsername = 'siva';
    const validPassword = 'siva';
    
    if (username === validUsername && password === validPassword) {
        window.location.href = 'welcome.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
