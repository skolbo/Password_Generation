var passwordCapital = "";
var passwordLowercase = "";
var passwordNumeric = "";
var passwordSpecial = "";
var capital = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var special = "!@#$%^&*()_+-=[]{},./?";
var passString = "";
var passResult = "";
//textArea displays the password on screen
var textArea = document.getElementById("password");

function characterTypes() {
  var passCapital = confirm("Generation could include uppercase letters");
  var passLowcase = confirm("Generation could include lowercase letters");
  var passNumeric = confirm("Generation could include numbers");
  var passSpecial = confirm("Generation could include special characters");
  if (passCapital === true || passLowcase === true || passNumeric === true || passSpecial === true) {
    //if Capital letters "passString"
    if (passCapital === true) {
      passString += capital
    }
    //if lowercase letters "passString"
    if (passLowcase === true) {
      passString += lower
    }
    //if Numeric "passString"
    if (passNumeric === true) {
      passString += numeric
    }
    //if special "passString"
    if (passSpecial === true) {
      passString += special
    }

  }
  // This alerts if none and loops back to the beginning
  else {
    alert("Select one character type.")
    characterTypes()
  };
}


// Get #generate element
var generateBtn = document.querySelector("#generate");

// Password Input
function writePassword() {
  var text = '';
  // Asking the number of characters allowed.
  function questions() {
    var passwordLength = prompt("Please type the number of characters allowed.(10 to 140 characters.)");
    if (parseInt(passwordLength) >= 10 && parseInt(passwordLength) <= 140) {
      characterTypes()
      //
      for (let i = 0; i < passwordLength; i++) {
        let x = passString[Math.floor(Math.random() * passString.length)]
        passResult += x;
      }
      console.log(passResult);
      console.log(textArea);
      text = document.createTextNode(passResult);
      //removes old password was clicked after the first was made
      textArea.innerHTML = '';
      textArea.appendChild(text);
      passResult = '';

    };


  }
  questions()
}

// Write Password Generation Code
generateBtn.addEventListener("click", () => {
  writePassword();
});