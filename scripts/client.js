$( document ).ready( onReady );

let employees = [];

function onReady(){
    $( '#submitButton' ).on('click', submitEmployee );
    $( '#salaryTable' ).on('click', '.deleteRowButton', deleteRow );
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
    // set the input values back to nothing
    $('#firstNameInput').val( '' );
    $('#lastNameInput').val( '' );
    $('#idInput').val( '' );
    $('#titleInput').val( '' );
    $('#annualSalaryInput').val( '' );
}

function displayEmployee( alsoEmployees ){
    console.log('in displayEmployee');
    let table = $( '#salaryTableBody' );
    table.empty();
    for (let i = 0; i < alsoEmployees.length; i++) {
        table.append(`<tr>
        <td>${ alsoEmployees[i].firstName}</td> 
        <td>${ alsoEmployees[i].lastName}</td>
        <td>${ alsoEmployees[i].id}</td>
        <td>${ alsoEmployees[i].title}</td>
        <td class="salary">${ alsoEmployees[i].annualSalary}</td>
        <td><button class="deleteRowButton">Delete</button></td>
        </tr>`);
    }

    //deleteRow();
    calculateSalary( alsoEmployees );
}

function calculateSalary ( andAlsoEmployees ){
    // check that we're in calculateSalary
    console.log( 'in calculateSalary' );
    // take in employees array
    // loop through and take the annual salary
    let salary = 0;
    for (let i = 0; i < andAlsoEmployees.length; i++) {
        salary += Number(andAlsoEmployees[i].annualSalary);   
    }
    // add and divide it by 12
    $( '#totalMonthlyOutput' ).empty();
    $( '#totalMonthlyOutput' ).append(salary/12);
    if(salary/12 > 20000){
     $( '#totalMonthly' ).css("background-color", "red" );
    }
    // append it to the DOM
    // if it's over 20k monthly turn red

}

function deleteRow(){
    let deletedText = $( this ).closest('tr').children('td.salary').text();
    console.log( deletedText );
    console.log( 'in deleteRow:', $( this ).parent().parent().fadeOut() );
}