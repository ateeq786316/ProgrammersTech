// js/scripts.js
// js/scripts.js
document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var email = document.getElementById('login-email').value;
      var password = document.getElementById('login-password').value;
      if (email === '' || password === '') {
          alert('Please fill in all fields.');
      } else {
          alert('Login successful!');
      }
  });
  
  document.getElementById('signup-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var name = document.getElementById('signup-name').value;
      var email = document.getElementById('signup-email').value;
      var password = document.getElementById('signup-password').value;
      if (name === '' || email === '' || password === '') {
          alert('Please fill in all fields.');
      } else {
          alert('Sign up successful!');
      }
  });
  