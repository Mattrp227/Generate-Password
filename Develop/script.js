// Assignment code here

function generatePassword(){

//length of password?
var lengthP;
lengthP = prompt ("Password Length?"); 
//is length between 8 and 128 characters?
if (lengthP > 7) {
 ;
}
//if password is not correct length reprompt
else if (lengthP < 8) {
  lengthP = prompt ("Password Length?");
}
else if (lengthP > 128){
  lengthP = prompt ("Password Length?");
}

//define choices variable
var choices = [];


//register selections to password choices

//define characters for password generator
var lowCase = ["a", "b", "c"];
//if yes to lowercase add lowercase to choices
if(confirm ("Use lowercase letters?") == true) {
  choices += lowCase;}


//define characters for password generator
var upCase = ["M", "N", "P"];
//if yes to uppercase add uppercase to choices
if(confirm("Use uppercase letters?") == true) {
  choices += upCase;}


//define characters for password generator
var specChar = ["!", "@", "$"];
//if yes to symbols add symbols to choices
if(confirm("use approved characters?") == true) {
  choices += specChar;}


//define characters for password generator
var cNumeric = ["9", "0", "5"];
//if yes to numbers add numbers to choices
if(confirm("Use numbers?") == true) {
  choices += cNumeric;}




//need to add selected characters to the password

var randPassword = '';
//for loop to select random characters from the ones added
for (i = 0; i < lengthP; i++) {
  //add random choices to string using Math.random
  //Math.random only didn't allow the choices to act as a function
  //string needed to be an intenger
  randPassword = randPassword + choices[Math.floor(Math.random() * 3)];
}
alert(randPassword);
return randPassword;


}

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
