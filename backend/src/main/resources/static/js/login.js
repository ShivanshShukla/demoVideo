const handleLogin = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }

    const user = {
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://localhost:8080/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert('Login and / or password is incorrect');
            } else {
                alert('Server error. Please try again later.');
            }
            throw new Error('Server error');
        }

        const responseData = await response.json();
        localStorage.setItem('connectedUser', JSON.stringify(responseData));
        window.location.href = 'index.html';
    } catch (error) {
        console.error('POST request error', error);
    }
};

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleLogin);
