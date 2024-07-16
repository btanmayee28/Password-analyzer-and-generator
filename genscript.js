function generatePassword() {
var passwordLength = document.getElementById("passwordLength").value;
var includeUppercase = document.getElementById("includeUppercase").checked;
var includeLowercase = document.getElementById("includeLowercase").checked;
var includeNumbers = document.getElementById("includeNumbers").checked;
var includeSpecialChars = document.getElementById("includeSpecialChars").checked;
if (!includeUppercase && !includeLowercase && !includeNumbers &&
!includeSpecialChars) {
alert("Select at least one character type.");
return;
}
var charset = '';
if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
if (includeNumbers) charset += '0123456789';
if (includeSpecialChars) charset += '!@#$%^&*()_+';
if (charset.length === 0) {
alert("Select at least one character type.");
return;
}
var password = '';
for (var i = 0; i < passwordLength; i++) {
var randomIndex = Math.floor(Math.random() * charset.length);
password += charset.charAt(randomIndex);
}
document.getElementById("generatedPassword").innerText = "Generated Password: " +
password;
}
