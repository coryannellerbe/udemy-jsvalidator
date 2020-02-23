const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show Input Error Message

function showError(input,message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show Success 

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Event Listeners 

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(username.value === '') {
    showError(username, 'Username Required');
  } else {
    showSuccess(username);
  }
});