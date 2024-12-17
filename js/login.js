document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', document.getElementById('username').value);
    formData.append('password', document.getElementById('password').value);

    const res = await fetch('api/admin_login.php', {
        method: 'POST',
        body: formData
    });

    const data = await res.json();

    if (data.success) {
        alert('Login successful!');
        window.location.href = 'admin.html'; // Redirect to admin panel
    } else {
        alert('Invalid username or password!');
    }
});
