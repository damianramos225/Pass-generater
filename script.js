// Assignment Code
var generateBtn = document.querySelector("#generate");
var showpassword = document.querySelector("#password")

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log(password)
}

var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "+",];
var UppercaseArray = ["A", "B", "C", "E", "F", "G", "H"];
var lowercaseArray = ["a", "b", "c", "e", "f", "g", "h"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {

    // create empty array to hold all posible choices
    var passwordOptions = [];

    var passWordsize = prompt("How many characters do you want in your password?")
    var lowerSize = confirm("Do you want lowercase characters in your password?")
    var upperSize = confirm("Do you want uppercase characters in your password?")
    var arraySpecial = confirm("Do you want special characters in your password?")
    var arrayNumber = confirm("Do you want numbers in your password?")


    if (lowerSize == true) {
        // add lowercase array into passwordArray
        passwordOptions = passwordOptions.concat(lowercaseArray)
    }

    if (upperSize == true) {

        passwordOptions = passwordOptions.concat(UppercaseArray)
    }

    if (arraySpecial == true) {

        passwordOptions = passwordOptions.concat(specialArray)
    }

    if (arrayNumber == true) {

        passwordOptions = passwordOptions.concat(numberArray)
    }






    var passwdSize = parseInt(passWordsize)
    var generatedPassword = "";


    for (i = 0; i < passwdSize; i++) {
        //var passwordArray = [...specialArray, ...UppercaseArray, ...lowercaseArray, ...numberArray];
        var index = Math.floor(Math.random() * passwordOptions.length)
        generatedPassword += passwordOptions[index]
        console.log(generatedPassword)
    }

    return generatedPassword


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);