 document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    function redirectToMain() {
        window.location.href = 'todo.html';
    }

    if (username === 'admin' && password === '12345') {
        redirectToMain();
    } else {
        alert('Invalid ername or password');
    }
});
