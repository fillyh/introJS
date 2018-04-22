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



// var myFavs = ['batman', 'black panther', 13 , true, 2003];
// console.log(myFavs);
//
// alert(myFavs.indexOf(true));
// var favoriteMovie = ['Star Wars VI', '1983'];
// var secondFavorite = ['Return of the King', '2003'];
// var thirdFavorite = ['Equilibrium', '2002'];
// var fourthFavorite =[prompt()];
// var myFavoriteMovies = [];
// myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite, fourthFavorite);
//
// console.log(myFavoriteMovies);
//
// var movieYears =[];
// movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1], myFavoriteMovies[3][1],);
//
// alert(movieYears);

// let movie1 = ['The Dark Knight', 'Batman'];
// let movie2 = ['Superman Returns', 'Superman'];
// let movie3 = ['Guardians of the Galaxy', 'Quill'];
// let movie4 = ['Avengers', 'Hulk'];
// let movie5 = ['Wonder Woman', 'Wonder Wo!'];
//
// let favoriteMovies = [];
// favoriteMovies.push(movie1,movie2, movie3, movie4, movie5);
// console.log('my favorite movies ' + favoriteMovies);
//
// let movieTitles = [];
// movieTitles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0]);
//
// alert(movieTitles);
//
// // let topFavs = [movie1.pop(), movie2.pop()];
// //
// // alert('my favorite ' + movie1.pop() + movie2.pop());
// // console.log(topFavs)
//
// let topFavs = [];
// topFavs.push(favoriteMovies[0][0], favoriteMovies[1][0]);
//
// alert('my favorite ' + topFavs);
//
// alert(favoriteMovies.length);
//
// let enterThingsToDo = prompt("Hi! List three items to do");
//
// let thingsToDo = enterThingsToDo.split('');
//
// console.log(thingsToDo);
// var myString = prompt("hi! enter things to do");
// var splits = myString.split(' ');
//
// console.log(splits);
