// let myName = "blah";
//
// alert('hello ' + myName + " yay!");
//
// /*Backtick Way*/
//
// alert(`Hello ${myName}. You are great!`);


/*For loops*/

// for (let i = 0; i <10; i++) {
//   console.log(i);
// }

// for (let i =0; i<10 || i<15; i++) {
//   if (!(i%2===0))
//   console.log(i);
// }

// // Declare a var and set it equal to any string.
// var favoriteBook = "Catcher in the Rye";
// // Declare a second var and call new String() on the same string (this will create an instance of a JS string object.)
// var aBook = new String( favoriteBook);
// // Use the logical operators and a third var to determine if they are strictly equal.
// var isTrue = (favoriteBook==aBook);
// console.log(isTrue);
// // Now use the logical operators and a fourth var to determine if they are loosely equal.
// var isNotTrue = (favoriteBook===aBook);
// console.log(isNotTrue);
// // Why did you get the result you got?

// var yourName = prompt('wahts your name?', 'Carlos');
// console.log(yourName.length);
// // console.log(!yourName);
//
// console.log("1"=1);  /*Reference error*/

// let obj1 ={
//   name: "Ryeker"
// };
//
// let obj2 = {
//   name: "Ryeker"
// };
//
// console.log(obj1 === obj2);

// console.log("three" * 15); /*NaN*/
// console.log(typeof 15);
// console.log(typeof "three");
// console.log(typeof("three" * 15)); /*returns "number"*/
// console.log(isNaN("three" * 15)); /*returns true*/

// let myNumber = prompt("Give me a Number!");
//
// alert(
//   isNaN((parseInt(myNumber) / 2))
// );
//
// let string = 44;
//
// string.toString();
//
// alert(`your favorite number is ${string}`);




// let yourNumb = prompt("gimme a numba!" , 10);
//
// let newNumb = parseInt(yourNumb);
//
// console.log('a: ' + (newNumb +42) ); /* could also use += */
// console.log('b: ' + (newNumb -42) );
// console.log('c: ' + (newNumb *42) );
// console.log('d: ' + (newNumb/42) );


const best =42;
const cheese = "delicious";

if(best === "42"){
  console.log('hooray!!');
} else if(cheese =="delicious"){
  console.log("hell yea!");
}
else{
  console.log('boooo');
}

/*Day Three Assignment
Asks for the user's age using the Date object.
if the user is over 18, allow them to proceed, otherwise alert the user that they are not old enough.
Now that all your users at this point are at least 18, ask if they are less than 80 years old.
Now ask the users who are between 18 and 80 if they like Star Wars. If they are over 80, ask if they like prunes.
If they say they don't Star Wars, end the program. In all other cases, alert them with a message.
*/
