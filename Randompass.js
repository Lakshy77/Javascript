function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters) {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allowedChars="";
    let password = '';
    
    allowedChars += includeLowerCase ? lowerCaseLetters : '';
    allowedChars += includeUpperCase ? upperCaseLetters : '';
    allowedChars += includeNumbers ? numbersChars : '';
    allowedChars += includeSpecialCharacters ? specialCharacters : '';

    if(length<= 0){
        return`{password length must be greater than 0}`;
    }
    if(allowedChars.length === 0){
        return`{At least one character type must be selected}`;
    }
   for(let i=0;i<length;i++){
    const randomIndex = Math.floor(Math.random()*allowedChars.length);
    password+=allowedChars[randomIndex]
   }

    
    return password;

}
const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSpecialCharacters = true;

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters);
console.log(`Generated Password: ${password}`)