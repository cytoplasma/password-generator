// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }

  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasnumbers = confirm(
    'Click OK to confirm including numeric characters.'
  );

  var haslowerCase = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  var hasupperCase = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  if (
    hasSpecialCharacters === false &&
    hasnumbers === false &&
    haslowerCase === false &&
    hasupperCase === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasnumbers: hasnumbers,
    haslowerCase: haslowerCase,
    hasupperCase: hasupperCase,
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (!options) return null;
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasnumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.haslowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }

  if (options.hasupperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
