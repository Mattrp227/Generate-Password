// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// Assignment code here
//define characters for password generator


function writePassword(){
//length of password?
var passwordLength;
passwordLength = prompt ("Password Length?", undefined, _default,8); 
//is length between 8 and 128 characters?
if (passwordLength > 7) {
 return;
}
//if password is not correct length reprompt
else if (passwordLength < 8) {
  passwordLength = prompt ("Password Length?", undefined, _default,8)
}
//pick if they want lower case
var lowCase;
lowCase = confirm ("yes or no?");

//pick if they want upper case
var upCase;
upCase = confirm ("yes or no?");
//pick if they want approved characters
var otherCharacters;
otherCharacters = confirm ("yes or no?");
//pick if they want numbers
var numBERS;
numBERS = confirm ("yes or no?");

//need to add selected characters to the password
for (var i = 0; i < Rpassword.length; i++) {
  Rpassword = Rpassword +   passwordcharacters;

}
return Rpassword;

var passwordcharacters = "abcde1234!?";
var Rpassword = '';



}
console.log(writePassword());

