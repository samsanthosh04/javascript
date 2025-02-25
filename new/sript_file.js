
   var getLocalData = [...JSON.parse(localStorage.getItem("userdatails"))];
   var addrow = document.getElementById('add');

   console.log(getLocalData);
   



   getLocalData.forEach(function (items, index) {
     
     var obj =
       `
     <td><span class="fn" id="fn_1">seg${items.First_Name}</span></td>
     <td><span class="ln" id="ln_1">${items.Email}</span></td>
     <td><span class="email" id="email_1">${items.Password}</span></td>
     <td><span class="psw" id="psw_1">${items.C_password}</span></td>
   `;
     addrow.innerHTML += obj;
   }
   )

   
   // var get = localStorage.getItem("userdatails");
   // console.log(get);
   