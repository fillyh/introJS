// // /* (thingToLog) same thing = */  thingToLog =>{
// // console.log(thingToLog);
// // alert(thingToLog);
// // }
//
// //
// // thingToLog => {
// //   return thingToLog;
// // }
// //
// // thingToLog => (thingToLog); /* Implicit Returned Arrow Function - same as previous*/
//
// // Accept 1 argument (age of the dog in years).
// let dogsAge = parseInt(prompt("Hi! How old is your dog?" , '3'));
// function dogYears(dogsAge){
//   return (dogsAge*7);
// }
// console.log(dogYears(dogsAge));
//
// // function lastChance(){
// //   let dogsAge = parseInt(prompt("where's my numba?!"));
// //   if(!isNaN(dogsAge)){
// //     alert(dogYears(dogsAge))
// //   } else { lastChance();
// //   }
// // }
//
//
// if(!isNaN(dogsAge)){
// alert( dogYears(dogsAge));
// } else{
//   let secondTry = parseInt(prompt("Enter A Number, please!!!!"));
// }
//
// alert("In dog years, your dog is " + dogYears(dogsAge));

// Now, write a function that tells you what a "lifetime supply" will be for any product. It should:
//
// Accept 2 arguments (age of person now, amount of product per day).
// Calculate the supply needed for the rest of the user's life, based on a constant max age of 80.

// function maxSupply (ageOfUser, productAmount){
//   const yearsLeft = 80 - ageOfUser;
//   return yearsLeft * (365 * productAmount);
// }
//
// let ageOfUser = parseInt(prompt("Gimme Yo Age! Please." , "21"));
// let productAmount = parseInt(prompt("How many beers do you drink a day?" , "2"));

// if(!isNAN(ageOfUser) && !isNaN(productAmount)){
//   maxSupply (ageNow, amountPerDay);
//
// }

//
// console.log(ageOfUser, productAmount);

// Alert the answer in this format: "You will need x to last you until you're y.
// BONUS: write it to accept a dynamic max age.
