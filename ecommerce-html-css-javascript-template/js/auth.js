// Initialize users array from localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Login form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    alert('Login successful!'); // You can implement actual user authentication logic here
  } else {
    alert('Invalid credentials. Please try again.');
  }
  loginForm.reset();
});

// Signup form
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUsername = e.target['new-username'].value;
  const newPassword = e.target['new-password'].value;
  
  if (users.some(user => user.username === newUsername)) {
    alert('Username already taken. Please choose another.');
  } else {
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users)); // Update users in localStorage
    alert('Signup successful! You can now login.');
    signupForm.reset();
  }
});

// Add sample users if needed (initially)
if (users.length === 0) {
  users.push({ username: 'user1', password: 'password1' });
  users.push({ username: 'user2', password: 'password2' });
  localStorage.setItem('users', JSON.stringify(users));
}
