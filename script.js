var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '[', '{', ']', '}', '|', ',', '.', '<', '>', '/', '?'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var totalArray = [];

var passwordLength;
var containsNumbers;
var containsSpecialChars;
var lowercase;
var uppercase;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = "";

  passwordLength = window.prompt("How many characters would you like your password to be? (Must be 8-128 characters in length)");
  containsNumbers = window.confirm("Would You Like Your Password To Contain Numbers?");
  containsSpecialChars = window.confirm("Would You Like Your Password To Contain Special Characters?");
  lowercase = window.confirm("Would You Like Your Password To Contain Lower Case Letters?");
  uppercase = window.confirm("Would You Like Your Password To Contain Upper Case Letters?");

  createTotalArray();

  if (passwordLength >= 8 && passwordLength <= 128) {

    for (var i = 0; i < passwordLength; i++) {
      var randomElement = getRandomElementOfArray(totalArray);
      password = password.concat(randomElement);
    }
    return makeValidPassword(password);
  }
  else {
    alert("NOT A VALID LENGTH!");
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});

function getRandomElementOfArray(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function createTotalArray() {
  if (!containsNumbers && !containsSpecialChars && !lowercaseLetters && !uppercaseLetters) {
    alert("INVALID PASSWORD");
  }
  if (containsNumbers) {
    totalArray = totalArray.concat(numbers);
  }
  if (containsSpecialChars) {
    totalArray = totalArray.concat(specialCharacters);
  }
  if (lowercase) {
    totalArray = totalArray.concat(lowercaseLetters);
  }
  if (uppercase) {
    totalArray = totalArray.concat(uppercaseLetters);
  }
}

function makeValidPassword(password) {
  if (containsNumbers && !numbers.includes(password)) {
    password.concat(getRandomElementOfArray(numbers));
  }
  if (containsSpecialChars && !specialCharacters.includes(password)) {
    password.concat(getRandomElementOfArray(specialCharacters));
  }
  if (lowercase && !lowercaseLetters.includes(password)) {
    password.concat(getRandomElementOfArray(lowercaseLetters));
  }
  if (uppercase && !uppercaseLetters.includes(password)) {
    password.concat(getRandomElementOfArray(uppercaseLetters));
  }
  if (password.length > passwordLength) {
    password = password.slice(password.length - passwordLength);
  }
  return password;
}

