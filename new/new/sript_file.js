// Get the data from localStorage
var getLocalData = JSON.parse(localStorage.getItem("userdatails")) || [];
var addrow = document.getElementById('add'); // Assuming this is the table body element

// Check if there is data in localStorage and populate the table
getLocalData.map(function (items, index) {
  var obj = `
    <tr>
      <td><span class="sl" id="sl_${index}">${index + 1}</span></td>
      <td><span class="fn" id="fn_${index}">${items.First_Name}</span></td>
      <td><span class="ln" id="ln_${index}">${items.Email}</span></td>
      <td><span class="email" id="email_${index}">${items.Password}</span></td>
      <td><span class="psw" id="psw_${index}">${items.C_password}</span></td>
      <td>
        <span class="psw" id="btn_edit_${index}">
          <button id = "bn" class="btn_${index}" onclick="edit_dt(${index})">Edit</button>
        </span>
        <span class="psw" id="btn_remove_${index}">
          <button class="btn_1" onclick="removeRow(${index})">Remove</button>
        </span>
      </td>
    </tr>
  `;
  addrow.innerHTML += obj;
});


// Function to remove a row
function removeRow(index) {
  let data = JSON.parse(localStorage.getItem("userdatails")) || [];

  // Remove the item at the given index
  data.splice(index, 1);

  // Save the updated data back to localStorage
  localStorage.setItem("userdatails", JSON.stringify(data));

  // Refresh the page to reflect changes
  location.reload();  // Or you can remove the row dynamically without reloading
}


// const form = document.querySelector('#form');
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const cpassword = document.querySelector('#cpassword');

// const existingUser = JSON.parse(localStorage.getItem("userdatails")) || [];
// if (existingUser.length > 0) {
//   const currentUser = existingUser[0]; // Assuming the first entry is the current user
//   username.value = currentUser.First_Name || '';
//   email.value = currentUser.Email || '';
//   password.value = currentUser.Password || '';
//   cpassword.value = currentUser.Password || '';
// }
// console.log(existingUser);

// function edit_dt(){
//   var check1 = (document.getElementById("bn")).classList;
//   console.log(check1);


function edit_dt(index) {
  let data = JSON.parse(localStorage.getItem("userdatails")) || [];
  console.log(data);
  let data1 = data[index];
  console.log(data1);

  var f_name = prompt(data1.First_Name);
  var l_name = prompt(data1.Email);
  var p_name = prompt(data1.Password);
  var cp_name = prompt(data1.C_password);

  const userdatails = {
    First_Name: f_name,
    Email: l_name,
    Password: p_name,
    C_password: cp_name,
  };

  // Overwrite the existing user data in localStorage
  const existingUser = JSON.parse(localStorage.getItem("userdatails")) || [];
  existingUser[index] = userdatails; // Update the first entry with the new data
  localStorage.setItem("userdatails", JSON.stringify(existingUser)); // Save back to localStorage
  window.reload
}



// function edit_dt(index) {
//   const StoreData = localStorage.getItem("userdatails");
//   console.log(StoreData);

//   const data = StoreData ? JSON.parse(StoreData):[];
//   return data[index]
// // }
// console.log(data[index]);

