// Assignment Code
var gemerateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    alert("Generate Password: " + password);
}

//Function to generate password based on criteria

function generatePassword() {
    // Prompt for password criteria
    var length =  prompt("Enter the length of the password (Choose betweeen 8 and 128 characters):");

    // Validate the length input
    if (length < 8 || length > 128 || isNaN(length)) {
        alert("Please enter a valid number betweeen 8 and 128.");
        return ""; //Return an empty string if no criteria is selected
    }

    var includeUppercase = confirm("include Uppercase character?");
    var includeLowercase = confirm("Include Lowercase characters?");
    var includeNumbers = confirm("Include Numbers");
    var includeSpecialCharacters = confirm("Include Special Characters");


    // Validate that at least one criteris is selected
    if (!includeLowercase && !includeNumbers && !includeUppercase && !includeSpecialCharacters) {
        alert("Please select at least one criteria for the password.");
        return "";  //Return an empty string if no critia is met
    }