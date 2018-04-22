// Prompts your user for their name.
// Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
// Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.w

// let usersName = prompt("H! What's your name?");
//
// let favColor = prompt("Hi! " + usersName + "! Which of the following 10 colors, would you say is your favorite? \n Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White or Grey");
//
// switch(favColor.toUpperCase()) {
//   case "RED":
//   	alert("Red, red, wine ... " + usersName + " nice choice. Enjoy the rest of your day!");
//   	break;
// 	case "ORANGE":
//   	alert("Orange? Really? " + usersName + ", Like an Oompa Loompa?");
//   	break;
// 	case "YELLOW":
//     alert(usersName + ", Look at the stars, Look how they shine for you, And everything you do, Yeah, they were all yellow.");
// 		break;
//   case "GREEN":
//   	alert(usersName + "! I see you got money on your mind! Make it rain! ... or sprinkle.");
//   	break;
// 	case "BLUE":
//   	alert("Sing with me " + usersName + ", I'm Blue da ba dee da ba daa!");
//   	break;
// 	case "PINK":
//     alert(usersName + " You know I saw her once in concert.");
// 		break;
//   case "PURPLE":
//   	alert("Purple rain, purple rain! Don't be shy " + usersName + " sing it loud! No one's watching!");
//   	break;
// 	case "BLACK":
//   	alert("Black and yellow, black and yellow ... " + usersName + ", do you remember who sings that song? Nevermind I'll google it later.");
//   	break;
// 	case "WHITE":
//     alert(usersName + ", I could be pretty fly for a white guy ... ");
// 		break;
//   case "GREY":
//     alert(usersName + ", whoa buddy! All fifty shades?");
// 		break;
//   default:
//     alert("Hey! That's not one of the colors!");
// }

// Day4 part II

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

let movie1 = ['The Dark Knight', 'Batman'];
let movie2 = ['Superman Returns', 'Superman'];
let movie3 = ['Guardians of the Galaxy', 'Quill'];
let movie4 = ['Avengers', 'Hulk'];
let movie5 = ['Wonder Woman', 'Wonder Wo!'];

let favoriteMovies = [];
favoriteMovies.push(movie1,movie2, movie3, movie4, movie5);
console.log('my favorite movies ' + favoriteMovies);

let movieTitles = [];
movieTitles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0]);

alert(movieTitles);

// let topFavs = [movie1.pop(), movie2.pop()];
//
// alert('my favorite ' + movie1.pop() + movie2.pop());
// console.log(topFavs)

let topFavs = [];
topFavs.push(favoriteMovies[0][0], favoriteMovies[1][0]);

alert('my favorite ' + topFavs);

alert(favoriteMovies.length);
