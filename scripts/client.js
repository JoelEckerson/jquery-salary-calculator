$( document ).ready( onReady );

let employees = [];

function onReady(){
    $( '#submitButton' ).on('click', submitEmployee );
}

function submitEmployee(){
    console.log('in submitEmployee');
    // creat new object with employee info
    let newEmployee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    } // end newEmployee
    employees.push(newEmployee);
    displayEmployee( employees );
    console.log(newEmployee);
}

function displayEmployee( alsoEmployees ){
    console.log('in displayEmployee');
    let table = $( '#salaryTable' );
    table.empty();
    for (let i = 0; i < alsoEmployees.length; i++) {
        table.append(`<tr>
        <td>${ alsoEmployees.firstName}</td>
        <td>${ alsoEmployees.lastName}</td>
        <td>${ alsoEmployees.id}</td>
        <td>${ alsoEmployees.title}</td>
        <td>${ alsoEmployees.annualSalary}</td>
        <td><button class="deletRowButton">Delete</button></td>
        </tr>`);
        
    }
}
