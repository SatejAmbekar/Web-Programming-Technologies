let userData = [];

function createUser() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (!username || !email || !phone) {
        alert('Please fill all fields');
        return;
    }

    let user = {
        username: username,
        email: email,
        phone: phone
    };

    userData.push(user);
    alert('User created successfully');
    displayUser();
}

function readUser() {
    let username = document.getElementById('username').value;

    if (!username) {
        alert('Please enter a username');
        return;
    }

    let user = userData.find(user => user.username === username);

    if (user) {
        alert('User details:\n' + JSON.stringify(user));
    } else {
        alert('User not found');
    }
}

function updateUser() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (!username || !email || !phone) {
        alert('Please fill all fields');
        return;
    }

    let userIndex = userData.findIndex(user => user.username === username);

    if (userIndex === -1) {
        alert('User not found');
        return;
    }

    userData[userIndex] = {
        username: username,
        email: email,
        phone: phone
    };

    alert('User updated successfully');
    displayUser();
}

function deleteUser() {
    let username = document.getElementById('username').value;

    if (!username) {
        alert('Please enter a username');
        return;
    }

    let userIndex = userData.findIndex(user => user.username === username);

    if (userIndex === -1) {
        alert('User not found');
        return;
    }

    userData.splice(userIndex, 1);
    alert('User deleted successfully');
    displayUser();
}

function displayUser() {
    let userDetails = document.getElementById('userDetails');
    userDetails.innerHTML = '';

    for (let user of userData) {
        userDetails.innerHTML += JSON.stringify(user) + '<br>';
    }
}