var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '[', '{', ']', '}', '|', ',', '.', '<', '>', '/', '?'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var totalArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  var passwordLength = lengthPrompt();
  var containsNumbers = hasNumbers();
  var containsSpecialChars = hasSpecialChars();
  var lowercase = isLowercase();
  var uppercase = isUppercase();

  function createTotalArray() {
    if (containsNumbers) {
      totalArray.push(numbers);
    }
    else if (containsSpecialChars) {
      totalArray.push(specialCharacters);
    }
    else if (lowercase) {
      totalArray.push(lowercaseLetters);
    }
    else if (uppercase) {
      totalArray.push(UppercaseLetters);
    }
  }
  createTotalArray();


  if (passwordLength >= 8 && passwordLength <= 128) {

    
    
    for(var i = 0; i < totalArray.length; i++) {
      var randomIndex = Math.ceil(Math.random() * totalArray.length);

      for(var j = 0; j < totalArray[i].length; j++) {

      }
    }

    for (var i = 0; i <= passwordLength; i++) {


      
      // if (randomArray === 1) {
      //   var randomElement = getRandomElementOfArray(numbers);
      //   console.log(randomElement);
      // }
      // else if (randomArray === 2) {
      //   var randomElement = getRandomElementOfArray(specialCharacters);
      //   console.log(randomElement);
      // }
      // else if (randomArray === 3) {
      //   var randomElement = getRandomElementOfArray(lowercaseLetters);
      //   console.log(randomElement);
      // }
      // else {
      //   var randomElement = getRandomElementOfArray(UppercaseLetters);
      //   console.log(randomElement);
      // }
    }
  }


}

function getRandomElementOfArray(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function lengthPrompt() {
  return prompt("How many characters would you like your password to be? (Must be 8-128 characters in length)");
}

function isLowercase() {
  return confirm("Would You Like Your Password To Contain Lower Case Letters?");
}

function isUppercase() {
  return confirm("Would You Like Your Password To Contain Upper Case Letters?");
}

function hasSpecialChars() {
  return confirm("Would You Like Your Password To Contain Special Characters?");
}

function hasNumbers() {
  return confirm("Would You Like Your Password To Contain Numbers?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});

