// // feilds
// let emailArr;
// var yourEmail;
//
// while (true) {
//   //user input
//   var yourEmail = prompt('What is your email?');
//   emailArr = yourEmail.split("");
//
//   if (!(emailArr.includes('@'))) {
//     var yourEmail = prompt('That was not a valid email. Please try again.');
//   }
//   else if (!(emailArr.includes('.'))) {
//     var yourEmail = prompt('That was not a valid email. Please try again.');
//   }
//   else {
//     alert('Thanks for providing a valid email.');
//   }
// }


// var numOfProjects = prompt("How many projects do you have? You can choose a number 0-2.");
//
// switch(parseInt(numOfProjects)) {
//   case 0:
//   	alert("You won't have a projects section on your page");
//   	break;
// 	case 1:
//   	alert("You'll only have one showing");
//   	break;
// 	case 2:
//     alert("You'll only have one showing");
// 		break;
//   default:
//     alert('You didn\'t follow the rules.');
// }

// var yourAge=prompt('how Old are you');
// parseInt(yourAge)>=18 ? alert('you can buy a lotto ticket') : alert(`you can't buy a ticket`)

// function chooseAdventure() {
//     while (true) {
//
//         var location = prompt("Would you like to go to the store or relax at home? Respond by typing store or home", 'store, home');
//
//         if (location == "store") {
//             var what = prompt("Are you going to bake or bbq?", 'bake, bbq');
//         }
//         if (what == "bake") {
//             prompt("You made some awesome cupcakes!");
//             break;
//         }
//         if(what == "bbq") {
//             prompt("You made some awesome kabobs!");
//             break;
//         }
//         if (location == "home") {
//             var activity = prompt("Would you like to go to watch netflix or go swimming?", 'netflix, swimming');
//         }
//         if (activity == "netflix") {
//             alerts("You watched Jessica Jones");
//             break;
//         }
//         if (activity == "swimming") {
//             prompt("You cooled off in the pool");
//             break;
//         }
//         else {
//             prompt("Sorry, you entered the wrong input or it wasn't lower-case.");
//             break;
//         }
//     }
// }
//
// chooseAdventure();

// let cars =["jeep" , "subaru" , "honda"];
// // console.log(cars[1]);
// // console.log(cars[1].length);
// // console.log(cars.unshift("jeep", "honda"));
// //
// // cars.push("bmw");
// // console.log(cars);
// //
// // let removedCar =cars.pop();
// // console.log (removedCar);
// //
// // let newCar =cars.shift();
// // console.log (removedCar);
//
// console.log(cars);
//
// cars.splice(2, 0, "chevy");
// console.log(cars);
//
// let cars2 = cars.slice();
// console.log("New list: " + cars2);

// let arr = ["christa", "Ryeker", "Bryan", "Jeff", "sam"];
let arr = ["christa", "Bryan", "Jeff", "sam"];
// console.log(Array.isArray(arr));
// arr.shift();
// console.log(arr);
//
// let bestEver = arr.slice(0,2);
// console.log(bestEver);
//
// console.log(arr[0])

// let backwards = arr.reverse();
// console.log(backwards);

let backwards = arr.sort();
console.log(backwards);


// let teacherIndex = arr.indexOf("Ryeker"); /*lowercase "R" results -1*/
// console.log(teacherIndex);
//
// let onlyStudents = arr.splice(teacherIndex, 1, 0);
// console.log(onlyStudents);
