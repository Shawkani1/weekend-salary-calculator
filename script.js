
let employeeForm = document.querySelector('employee-form');
let totalMonthlyCost = document.querySelector('totalMonthly');
let Button = document.getElementById('submitButton');
let employeeTable = document.getElementById('employeeTable');
console.log(Button);
Button.addEventListener('click', function() {
    event.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let id = document.getElementById('id').value;
    let jobTitle = document.getElementById('title').value;
    let annualSalary = parseInt(document.getElementById('AnnualSalary').value);

    let totalMonthlyCost = 0;
    let employeeRow = document.getElementById('employeeTable');
    employeeRow.innerHTML += `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button class="deleteBtn">Delete</button></td>
    `;

});

function onDeleteRow(event){
  if (event.target.classList.contains("deleteBtn")){
 
  }
  
  const btn = event.target;
  btn.closest('tr').remove();
}

employeeTable.addEventListener('click', onDeleteRow);


