// Get the data from localStorage
var getLocalData = JSON.parse(localStorage.getItem("userdatails")) || [];
var addrow = document.getElementById("add"); // Assuming this is the table body element

// Function to populate the table
function populateTable() {
  let tableRows = ""; // Initialize an empty string for building table rows
  getLocalData.forEach(function (items, index) {
    // Build the row content as a string
    tableRows += `
      <tr>
        <td><span class="sl" id="sl_${index}">${index + 1}</span></td>
        <td><span class="fn" id="fn_${index}">${items.First_Name}</span></td>
        <td><span class="ln" id="ln_${index}">${items.Email}</span></td>
        <td><span class="email" id="email_${index}">${
      items.Password
    }</span></td>
        <td><span class="psw" id="psw_${index}">${items.C_password}</span></td>
        <td>
          <span class="psw" id="btn_edit_${index}">
            <button id = "btn_0" class="btn_${index}" onclick="edit_dt(${index})">Update</button>
          </span>
          <span class="psw" id="btn_remove_${index}">
            <button id = "btn_1" class="btn_1" onclick="removeRow(${index})">Remove</button>
          </span>
        </td>
      </tr>
    `;
  });

  // Once the loop is done, insert the table rows into the table body
  addrow.innerHTML = tableRows;
}

// Function to remove a row
function removeRow(index) {
  // Get current data from localStorage
  let data = JSON.parse(localStorage.getItem("userdatails")) || [];

  // Remove the data at the specified index
  data.splice(index, 1);

  // Update the localStorage with the new data
  localStorage.setItem("userdatails", JSON.stringify(data));

  // Refresh the table after removal
  populateTable();
  location.reload();
}

// Function to edit data
function edit_dt(index) {
  let data = JSON.parse(localStorage.getItem("userdatails")) || [];
  let user = data[index]; // Get the specific user data

  const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
  modal.show();

  // Get the form fields
  var f_name = user.First_Name;
  var l_name = user.Email;
  var p_name = user.Password;
  var cp_name = user.C_password;

  // Populate the form fields with existing data
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const cpassword = document.querySelector("#cpassword");

  // Set the form values with existing data
  username.value = f_name;
  email.value = l_name;
  password.value = p_name;
  cpassword.value = cp_name;

  // Update the modal title to indicate it's an edit
  document.getElementById("staticBackdropLabel").textContent = "Edit User";

  // Update the form submit handler for editing
  document.querySelector("#form").onsubmit = function (e) {
    e.preventDefault(); // Prevent default form submission

    if (validateInputs()) {
      // Update user data
      const updatedUser = {
        First_Name: username.value,
        Email: email.value,
        Password: password.value,
        C_password: cpassword.value,
      };

      // Update the data in localStorage
      data[index] = updatedUser;
      localStorage.setItem("userdatails", JSON.stringify(data));

      // Close the modal
      modal.hide();

      // Refresh the table with the updated data
      populateTable();
    }
  };
}

// Call populateTable when the page loads
populateTable();

// Form submission logic
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission if inputs are invalid

  if (validateInputs()) {
    addName();
    populateTable(); // Update the table after adding a new user
    // location.reload();
  }
});

function validateInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  let success = true;

  // Validation for each field
  if (usernameVal === "") {
    success = false;
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    success = false;
    setError(password, "Password is required");
  } else if (passwordVal.length < 8) {
    success = false;
    setError(password, "Password must be at least 8 characters long");
  } else {
    setSuccess(password);
  }

  if (cpasswordVal === "") {
    success = false;
    setError(cpassword, "Confirm password is required");
  } else if (cpasswordVal !== passwordVal) {
    success = false;
    setError(cpassword, "Password does not match");
  } else {
    setSuccess(cpassword);
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function addName() {
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

  // Add new user data to localStorage
  const users = JSON.parse(localStorage.getItem("userdatails") || "[]");
  users.push(user);
  localStorage.setItem("userdatails", JSON.stringify(users));
  location.reload();
}

function clo() {
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const cpassword = document.querySelector("#cpassword");

  // Set the form values with existing data
  username.value = "";
  email.value = "";
  password.value = "";
  cpassword.value = "";
}
