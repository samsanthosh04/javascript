const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

// Retrieve user data from localStorage and pre-fill the form if it exists


const existingUser = JSON.parse(localStorage.getItem("userdatails")) || [];
if (existingUser.length > 0) {
  const currentUser = existingUser[0]; // Assuming the first entry is the current user
  username.value = currentUser.First_Name || '';
  email.value = currentUser.Email || '';
  password.value = currentUser.Password || '';
  cpassword.value = currentUser.Password || '';
}

form.addEventListener('submit', (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
  if (validateInputs() === true) {
    updateUserInfo(); // Update user details in localStorage
    handleSubmit();
    goBack();
  }
});

function validateInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  let success = true;

  if (usernameVal === '') {
    success = false;
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }

  if (emailVal === '') {
    success = false;
    setError(email, 'Email is required');
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, 'Please enter a valid email');
  } else {
    setSuccess(email);
  }

  if (passwordVal === '') {
    success = false;
    setError(password, 'Password is required');
  } else if (passwordVal.length < 8) {
    success = false;
    setError(password, 'Password must be at least 8 characters long');
  } else {
    setSuccess(password);
  }

  if (cpasswordVal === '') {
    success = false;
    setError(cpassword, 'Confirm password is required');
  } else if (cpasswordVal !== passwordVal) {
    success = false;
    setError(cpassword, 'Password does not match');
  } else {
    setSuccess(cpassword);
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');

  errorElement.innerText = message;
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success');
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');

  errorElement.innerText = '';
  inputGroup.classList.add('success');
  inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function updateUserInfo() {
  const usernameVal = username.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  const cpasswordVal = cpassword.value;

  const user = {
    First_Name: usernameVal,
    Email: emailVal,
    Password: passwordVal,
    C_password: cpasswordVal,
  };

  // Overwrite the existing user data in localStorage
  const existingUser = JSON.parse(localStorage.getItem("userdatails")) || [];
  existingUser[0] = user; // Update the first entry with the new data
  localStorage.setItem("userdatails", JSON.stringify(existingUser)); // Save back to localStorage
}

function handleSubmit() {
  alert("Form Submitted!");
  // You can add form submission logic here (like sending data to a server)
}

function goBack() {
  window.history.back();
}
