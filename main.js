const readline = require('readline-sync');

let userName = readline.question("Please enter your name: ")
console.log(`Hello, ${userName}`);

function validPassword(password){
    let passwordLength = password.length >=8;
    let passwordUpperCase = /[A-Z]/.test(password);
    let passwordNumber = /0-9/.test(password);

    return passwordLength && passwordUpperCase && passwordNumber;

}

let password;
do{
    password = readline.question("Enter a password:(Must be at least 8 characters, 1 upppercase, and one number).");
    if (!validPassword(password)) {
        console.log("Invalid Password");
    }
} while (validPassword(password));
    console.log("Password accepted");




