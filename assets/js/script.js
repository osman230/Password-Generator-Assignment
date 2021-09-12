//Assignment code here

//Needs numbers, symbols, uppercase, and lowercase letters.
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", 
  "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var options;
var hasNumber;
var hasCharacter;
var hasUppercase;
var hasLowercase;
var result;


var toUpper = function (x) {
    return x.toUpperCase();
};
upperAlphabet = alphabet.map(toUpper);

var get = document.querySelector("#generate");


function generatePassword() {

  result = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    if (!result) {
        alert("This needs a value");
    } else if (result < 8 || result > 128) {

        result = parseInt(prompt("You must choose between 8 and 128"));

    } else {
  
        hasNumber = confirm("Would you like your password to contain numbers?");
        hasCharacter = confirm("Would you like your password to contain symbols?");
        hasUppercase = confirm("Would you like your password to contain uppercase letters?");
        hasLowercase = confirm("Would you like your password to contain lowercase letters?");
    };


    if (!hasCharacter && !hasNumber && !hasUppercase && !hasLowercase) {
        options = alert("You must choose a criteria!");

    }

      else if (hasCharacter && hasNumber && hasUppercase && hasLowercase) {

        options = character.concat(number, alphabet, upperAlphabet);
      }

      else if (hasCharacter && hasNumber && hasUppercase) {
        options = character.concat(number, upperAlphabet);
      }
      else if (hasCharacter && hasNumber && hasLowercase) {
        options = character.concat(number, alphabet);
      }
      else if (hasCharacter && hasLowercase && hasUppercase) {
        options = character.concat(alphabet, upperAlphabet);
       }
      else if (hasNumber && hasLowercase && hasUppercase) {
        options = number.concat(alphabet, upperAlphabet);
       }

      else if (hasCharacter && hasNumber) {
        options = character.concat(number);

      }
      
      else if (hasCharacter && hasLowercase) {
        options = character.concat(alphabet);

     } else if (hasCharacter && hasUppercase) {
        options = character.concat(upperAlphabet);
      }
    
      else if (hasLowercase && hasNumber) {
        options = alphabet.concat(number);

      } 
    
      else if (hasLowercase && hasUppercase) {
        options = alphabet.concat(upperAlphabet);
      } 
      
      else if (hasNumber && hasUppercase) {
        options = number.concat(upperAlphabet);
       }
  
      else if (hasCharacter) {
        options = character;
       }

      else if (hasNumber) {
        options = number;
      }
    
      else if (hasLowercase) {
        options = alphabet;
      }

      else if (hasUppercase) {
        options = uppercase.concat(upperAlphabet);
     };

  
    var password = [];

   
for (var i = 0; i < result; i++) {
var pickOptions = options[Math.floor(Math.random() * options.length)];
password.push(pickOptions);
}

    var ps = password.join("");
    UserInput(ps);
    return ps;
}
get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}