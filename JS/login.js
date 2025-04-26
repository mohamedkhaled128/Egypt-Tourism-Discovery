const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');
const signupMessage = document.getElementById('signup-message');
const signinMessage = document.getElementById('signin-message');
let users = [];

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    } else {
        fetch('users.txt')
            .then(response => response.text())
            .then(data => {
                users = data.split('\n')
                    .filter(line => line.trim() !== '')
                    .map(line => {
                        const [email, password] = line.split(':');
                        return { email: email.trim(), password: password.trim() };
                    });
                localStorage.setItem('users', JSON.stringify(users));
            })
            .catch(error => {
                console.error('Error reading users.txt:', error);
                users = [];
            });
    }
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = signupForm.querySelector('input[name="name"]').value.trim();
    const email = signupForm.querySelector('input[name="email"]').value.trim();
    const password = signupForm.querySelector('input[name="password"]').value.trim();

    const userExists = users.some(user => user.email === email);

    if (userExists) {
        signupMessage.textContent = 'Email already exists!';
        signupMessage.style.color = 'red';
    } else {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        signupMessage.textContent = 'Account created successfully, please login.';
        signupMessage.style.color = 'green';
        signupForm.reset();
        container.classList.remove("active");
    }
});

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = signinForm.querySelector('input[name="email"]').value.trim();
    const password = signinForm.querySelector('input[name="password"]').value.trim();

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        signinMessage.textContent = 'Login successful! Redirecting...';
        signinMessage.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1500);
    } else {
        signinMessage.textContent = 'Invalid email or password!';
        signinMessage.style.color = 'red';
    }
});