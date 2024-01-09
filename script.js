// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Character Variables
var lowerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChoice = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var digitChoice = ["0","1","2","3","4","5","6","7","8","9"];
var specialChoice = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\\",":","'","<","\,",">",".","?","\"","\;","/"];

function generatePassword() {
var userPassword = [];

// ask for number of characters
var numChoice  = window.prompt(
  "How many characters would you like your password to be? \nEnter an amount between 8 and 128."
);

if (numChoice < 8 || numChoice > 128) {
  window.alert("Enter an amount between 8 and 128.");
  return generatePassword();
} else if (isNaN(numChoice)) {
  passwordLength = window.alert("Enter an amount between 8 and 128.");
  return generatePassword();
} else {
  window.alert("Generating a password " + numChoice + " characters long");
}



// ask if they want lowercase
var lowerChoice = window.confirm(
  "Would you like your password to include lowercase characters?"
);

if (lowerChoice) {
  window.alert("You have included lowercase letters in your password");
} else {
  window.alert("You have chosen to not include lowercase characters ");
} 

// ask if they want upercase
var upperChoice = window.confirm(
  "Would you like your password to include uppercase characters?"
);

if (upperChoice) {
  window.alert("You have included uppercase characters in your password");
} else {
  window.alert("You have chosen to not include uppercase characters ");
} 

// ask if they want digits 
var digitChoice = window.confirm(
  "Would you like your password to include numbers?"
);

if (digitChoice) {
  window.alert("You have included numbers in your password");
} else {
  window.alert("You have chosen to not include numbers.");
} 

// ask if they want special characters
var specialChoice = window.confirm(
  "Would you like your password to include special characters?"
);

if (specialChoice) {
  window.alert("You have included special characters in your password.");
} else {
  window.alert("You have chosen to not include special characters.");
} 

// check if any variables have been chosen
if (!lowerChoice && !upperChoice && !digitChoice && !specialChoice) {
 window.alert("You need to choose at least one type of character.");
 return generatePassword();
} else {
  window.alert("Generating password.");
}


// Concatinate valuse
if (lowerChoice) {
  userPassword = userPassword.concat(this.lowerChoice);
}

if (upperChoice) {
  userPassword = userPassword.concat(this.upperChoice);
}

if (digitChoice) {
  userPassword = userPassword.concat(this.digitChoice);
}

if (specialChoice) {
  userPassword = userPassword.concat(this.specialChoice);
}


var completePass = [];
// for each character in the password
//randomly select a chosen character typeof
// randomly select a character from that typeof
for (var i = 0; i < numChoice; i++) {
  var addPass = [Math.floor(Math.random() * userPassword.length)];
  // add it to the password
  completePass = completePass + userPassword[addPass];
}

// return password
return completePass;
}

