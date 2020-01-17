// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    generatedPassword += passwordText[password];
    passwordText.value = password;
    console.log(password)
}

var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "+",];
var UppercaseArray = ["A", "B", "C", "E", "F", "G", "H"];
var lowercaseArray = ["a", "b", "c", "e", "f", "g", "h"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
    var PassWordsize = prompt("How many character do you want in your password?")
    var passwdSize = parseInt(PassWordsize)
    var generatedPassword = "";


    for (i = 0; i < passwdSize; i++) {
        var passwordArray = [...specialArray, ...UppercaseArray, ...lowercaseArray, ...numberArray];
        var index = Math.floor(Math.random() * passwordArray.length)
        generatedPassword += passwordArray[index]
        console.log(generatedPassword)
    }

    return generatedPassword


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);