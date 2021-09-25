// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var possiblePassword = [];
var passwordLength = 0;
var password = [];
var finalPassword = "";
// var userChoicesArray = [];

// Write password to the #password input
function writePassword() {
  // location.reload();
  generatePassword();
  
  // generateBtn.stopPropagation();
  passwordText.value = password.join("");
  // passwordText.value = password.toString();
};
passwordText.value = password.toString();
console.log(possiblePassword);
console.log(password);
console.log(finalPassword);
// passwordText.append(finalPassword);

function generatePassword() {
  password = [];
  getPasswordLength();
  getCharacterPrefences();
  
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * possiblePassword.length);
    password[i] = possiblePassword[index];
  }
  
  // return generatedPassword.join("").toString();
};

function getPasswordLength(){
  passwordLength = 0;

  // gets length of password from user (keeps asking till length is > 8 && < 128 characters)
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("How long do you want your password to be? (must be between 8 and 128 characters)")
  }
};


function getCharacterPrefences(){
  possiblePassword = [];
  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var special = false;

  // userChoicesArray = [];
  // checks what character types the user wants
  lowercase = confirm("Would you like to include lowercase characters?");
  uppercase = confirm("Would you like to include uppercase characters?");
  numeric = confirm("Would you like to include numeric characters?");
  special = confirm("Would you like to include special characters?");

  if (lowercase == false && uppercase == false && numeric == false && special == false){
    alert("You didn't choose any password character type preferences. Click generate password and chose at least one character type preference.");
    writePassword();
  }
  if (lowercase == true) {
    for (let i = 0; i < lowercaseArray.length; i++){
      possiblePassword.push(lowercaseArray[i]);
    }
  }
  if (uppercase == true) {
    for (let i = 0; i < uppercaseArray.length; i++){
      possiblePassword.push(uppercaseArray[i]);
    }
  }
  if (numeric == true) {
    for (let i = 0; i < numbArray.length; i++){
      possiblePassword.push(numbArray[i]);
    }
  }
  if (special == true) {
    for (let i = 0; i < characterArray.length; i++){
      possiblePassword.push(characterArray[i]);
    }
  }
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);