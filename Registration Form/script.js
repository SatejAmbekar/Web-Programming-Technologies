document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting normally

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var table = document.getElementById('registrantsTable');
    var row = table.insertRow(-1); // at the end of the table
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
});