// // // Take a number and return the square of that number (power of 2).
// // If a non-number argument is passed into the function, alert NaN and prompt for another response
// function powerOfTwo(){
// let userNumb = parseInt(prompt("Lets find the power of 2 for any number!" , "Enter a number."));
// let result = Math.pow(userNumb, 2)
// if(!isNaN(userNumb)){
//   alert(`The power of 2 for ${userNumb} is ${result}!`)
// } else {
//   powerOfTwo();
// }
//
// }
//
// powerOfTwo();


// In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
function grammarPolice(){
let string = prompt("Type something.");
let stringArray = string.split("");
let upperCaseString = stringArray[0].toUpperCase();
stringArray.splice(0,1, upperCaseString);
let newString = stringArray.join("")
console.log(upperCaseString);
console.log(stringArray);
console.log(newString);

if(newString.includes(".", "!", "?")){
  alert("Looks like you already had a complete sentence.")
} else {
  alert(newString.join("") + ".");
}

}

grammarPolice();
