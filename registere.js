
function formValidation() {
// Make quick references to our fields.
var fullname = document.getElementById('fullname');
var addr = document.getElementById('addr');
var birth = document.getElementById('birth');
var state = document.getElementById('state');
var username = document.getElementById('username');
var email = document.getElementById('email');
// To check empty form fields.
if (fullname.value.length == 0) {
document.getElementById('head').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
fullname.focus();
return false;
}
// Check each input in the order that it appears in the form.
if (inputAlphabet(fullname, "* For your name please use alphabets only *")) {
if (lengthDefine(username, 6, 8)) {
if (emailValidation(email, "* Please enter a valid email address *")) {
if (trueSelection(state, "* Please Choose any one option")) {
if (textAlphanumeric(addr, "* For Address please use numbers and letters *")) {
if (textDate(birth, "* Please enter a valid birth date *")) {
return true;
}
}
}
}
}
}
return false;
}
// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) {
var alphaExp = /^[a-zA-Z]+$/;
if (inputtext.value.match(alphaExp)) {
return true;
} else {
document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
//alert(alertMsg);
inputtext.focus();
return false;
}
}
// Function that checks whether the input characters are restricted according to defined by user.
function lengthDefine(inputtext, min, max) {
var uInput = inputtext.value;
if (uInput.length >= min && uInput.length <= max) {
return true;
} else {
document.getElementById('p2').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
inputtext.focus();
return false;
}
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function emailValidation(inputtext, alertMsg) {
var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
if (inputtext.value.match(emailExp)) {
return true;
} else {
document.getElementById('p3').innerText = alertMsg; // This segment displays the validation rule for email.
inputtext.focus();
return false;
}
}
// Function that checks whether input text is numeric or not.
function textDate(inputtext, alertMsg) {
  var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
  // Match the date format through regular expression
  if(inputtext.value.match(dateformat))
  {
  inputtext.focus();
  //Test which seperator is used '/' or '-'
  var opera1 = inputtext.value.split('/');
  var opera2 = inputtext.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  // Extract the string into month, date and year
  if (lopera1>1)
  {
  var pdate = inputtext.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputtext.value.split('-');
  }
  var mm  = parseInt(pdate[0]);
  var dd = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  document.getElementById('p4').innerText = alertMsg;
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  document.getElementById('p4').innerText = alertMsg;
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  document.getElementById('p4').innerText = alertMsg;
  return false;
  }
  }
  }
  else
  {
  document.getElementById('p4').innerText = alertMsg;
  inputtext.focus();
  return false;
  }
}
// Function that checks whether a option is selected from the selector and if it's not it displays an alert message.
function trueSelection(inputtext, alertMsg) {
if (inputtext.value == "Please Choose") {
document.getElementById('p5').innerText = alertMsg; //this segment displays the validation rule for selection.
inputtext.focus();
return false;
} else {
return true;
}
}
// Function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumeric(inputtext, alertMsg) {
var alphaExp = /^[0-9a-zA-Z]+$/;
if (inputtext.value.match(alphaExp)) {
return true;
} else {
document.getElementById('p6').innerText = alertMsg; // This segment displays the validation rule for address.
inputtext.focus();
return false;
}
}
