function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;


    // Validate the form
    if (!name) {
        alert('Please fill in the name field.');
        return;
    }

    if (!email) {
        alert('Please fill in the email field.');
        return;
    } else if (!isValidEmail(email)) {
        alert('Please include "@" for a valid email.');
        return;
    }

    if (!password) {
        alert('Please fill in the password field.');
        return;
    }

    if (!dob) {
        alert('Please fill in the date of birth field.');
        return;
    }

    if (!acceptTerms) {
        alert('Please accept the terms.');
        return;
    }

    // Check if the user is between 18 and 55 years old
    const dobDate = new Date(dob);
    const currentDate = new Date('2023-11-21');
    const minDate = new Date(currentDate);
    minDate.setFullYear(minDate.getFullYear() - 55);
    const maxDate = new Date(currentDate);
    maxDate.setFullYear(maxDate.getFullYear() - 18);

    if (dobDate < minDate || dobDate > maxDate) {
        alert('Please enter a valid date of birth between 18 and 55 years old.');
        return;
    }

    // Add the entry to the table
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = password;
    cell4.innerHTML = dob;
    cell5.innerHTML = acceptTerms ? 'Yes' : 'No';

    // Clear the form
    document.getElementById('userForm').reset();
}

function isValidEmail(email) {
    // A simple email validation using a regular expression
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
