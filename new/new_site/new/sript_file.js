// Get the data from localStorage
var getLocalData = JSON.parse(localStorage.getItem("userdatails")) || [];
var addrow = document.getElementById('add'); // Assuming this is the table body element

// Check if there is data in localStorage and populate the table
getLocalData.map(function (items, index) {
  var obj = `
    <tr>
      <td><span class="fn" id="fn_${index}">${items.First_Name}</span></td>
      <td><span class="ln" id="ln_${index}">${items.Email}</span></td>
      <td><span class="email" id="email_${index}">${items.Password}</span></td>
      <td><span class="psw" id="psw_${index}">${items.C_password}</span></td>
      <td>
        <span class="psw" id="btn_edit_${index}">
          <button class="btn_1" onclick="location.href='reg_form_edit.html'">Edit</button>
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
