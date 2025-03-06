const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


const otGroup = element.parentElement;
const btElement = inputGroup.querySelector('.btn_1')

const usernameVal = otGroup.username.value;
const emailVal = otGroup.email.value;
const passwordVal = otGroup.password.value;
const cpasswordVal = otGroup.cpassword.value;

form.innerHTML = usernameVal
form.innerHTML = emailVal
form.innerHTML = passwordVal
form.innerHTML = cpasswordVal



// form.addEventListener('submit', (e) => {

//     if (!validateInputs()) {
//         e.preventDefault();
//     }
//     if (validateInputs() === true) {
//         addName()
//         handleSubmit()
//         goBack()
//     }
// })

// function validateInputs() {
//     const usernameVal = username.value.trim()
//     const emailVal = email.value.trim();
//     const passwordVal = password.value.trim();
//     const cpasswordVal = cpassword.value.trim();
//     let success = true

//     if (usernameVal === '') {
//         success = false;
//         setError(username, 'Username is required')
//     }
//     else {
//         setSuccess(username)
//     }

//     if (emailVal === '') {
//         success = false;
//         setError(email, 'Email is required')
//     }
//     else if (!validateEmail(emailVal)) {
//         success = false;
//         setError(email, 'Please enter a valid email')
//     }
//     else {
//         setSuccess(email)
//     }

//     if (passwordVal === '') {
//         success = false;
//         setError(password, 'Password is required')
//     }
//     else if (passwordVal.length < 8) {
//         success = false;
//         setError(password, 'Password must be atleast 8 characters long')
//     }
//     else {
//         setSuccess(password)
//     }

//     if (cpasswordVal === '') {
//         success = false;
//         setError(cpassword, 'Confirm password is required')
//     }
//     else if (cpasswordVal !== passwordVal) {
//         success = false;
//         setError(cpassword, 'Password does not match')
//     }
//     else {
//         setSuccess(cpassword)
//     }

//     return success;

// }
// //element - password, msg- pwd is reqd
// function setError(element, message) {
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')

//     errorElement.innerText = message;
//     inputGroup.classList.add('error')
//     inputGroup.classList.remove('success')
// }

// function setSuccess(element) {
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')

//     errorElement.innerText = '';
//     inputGroup.classList.add('success')
//     inputGroup.classList.remove('error')
// }

// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };

// function addName() {
//     const usernameVal = username.value;
//     const emailVal = email.value;
//     const passwordVal = password.value;
//     const cpasswordVal = cpassword.value;

//     const user = {
//         First_Name: usernameVal,
//         Email: emailVal,
//         Password: passwordVal,
//         C_password: cpasswordVal,
//     }

//     localStorage.setItem("userdatails", JSON.stringify([...JSON.parse(localStorage.getItem("userdatails") || "[]"), user]));
// }

// function handleSubmit() {
//     alert("Form Submitted!");
//     // You can add form submission logic here (like sending data to a server)
// }

// // JavaScript function to navigate back to the previous page
// function goBack() {
//     window.history.back();
// }