// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set its value to Dane
// We check name is the exact same as value 'Mary' but it is not, so skip console.log 'Hi, Mary!'
// Since the name is not exactly the same as 'Mary', so we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable named secret and another variable named code with a value of 123
// We check to see if the code variable is exactly equal to 123, which it is, so the secret variable
// value changes to 'super' and the code variable doubles in value, becoming a value of 246. The
// second conditional we check if the variable code is greater than 250, which it is not.
// Finally we console.log secret, and in the console we would see 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create 3 different variables named isStudent, age, and zip. we make isStudent a boolean variable equal
// to false. Variable age value is 34 and variable zip is 55407. Then we check if isStudent value is true and
// variable zip value is greater than 80000. Our values do not match both conditionals, so we skip console.log
// 'You're a student on the West Coast!'. Next we check else if variable isStudent value is exactly the same as
// false or if the variable age value is less than 30. Our values are neither, so we skip console.log 'What are
// your hobbies?'. Then we check conditional else if variable isStudent value is exactly equal to true.  Our
// value of variable isStudent matches, so we console.log 'Welcome to Prime!'. We ignore last conditional and
// ignore it's console.log 'How about the weather?' because we go with the first conditional match.
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne = 'red';, instructions asks for colorOne = 'blue';
// FIX - colorTwo = 'blue';, instructions ask for colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - if (mix === true) {, simplier way is if (mix){
// FIX - add colorTwo = 'purple'; beneath colorOne = 'purple', instructions asks for both set to purple
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
// FIX - change const time = 4;, instructions ask for let time = 4;
let temp = 40;
const time = 4;

// FIX - change ||, instructions ask for if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - switch minAge and age, instructions asks for if (age >= minAge) {
// FIX - change console.log('no entry');, instructions aks for console.log('enter');
// FIX - delete line 177 and 178 so it is closed out with }, instructions does not ask for additional code
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
