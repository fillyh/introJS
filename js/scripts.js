// Prompts your user for their name.
// Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
// Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.w

document.getElementById("takehome1").addEventListener("click", takeHome1);

function takeHome1() {



let usersName = prompt("H! What's your name?");

let favColor = prompt("Hi! " + usersName + "! Which of the following 10 colors, would you say is your favorite? \n Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White or Grey");

switch(favColor.toUpperCase()) {
  case "RED":
  	alert("Red, red, wine ... " + usersName + " nice choice. Enjoy the rest of your day!");
  	break;
	case "ORANGE":
  	alert("Orange? Really? " + usersName + ", Like an Oompa Loompa?");
  	break;
	case "YELLOW":
    alert(usersName + ", Look at the stars, Look how they shine for you, And everything you do, Yeah, they were all yellow.");
		break;
  case "GREEN":
  	alert(usersName + "! I see you got money on your mind! Make it rain! ... or sprinkle.");
  	break;
	case "BLUE":
  	alert("Sing with me " + usersName + ", I'm Blue da ba dee da ba daa!");
  	break;
	case "PINK":
    alert(usersName + ", you know I saw her once in concert.");
		break;
  case "PURPLE":
  	alert("Purple rain, purple rain! Don't be shy " + usersName + ", sing it loud! No one's watching!");
  	break;
	case "BLACK":
  	alert("Black and yellow, black and yellow ... " + usersName + ", do you remember who sings that song? Nevermind I'll google it later.");
  	break;
	case "WHITE":
    alert(usersName + ", I could be pretty fly for a white guy ... ");
		break;
  case "GREY":
    alert(usersName + ", whoa buddy! All fifty shades?");
		break;
  default:
    alert("Hey! That's not one of the colors!");
}
};

// Day4 part II

document.getElementById("takehome2").addEventListener("click", takeHome2);

function takeHome2() {

// // Creates an array of things you need or want to do this weekend by collecting three todos from the user.
let thingsToDo = prompt('Hi, enter three things that need to get done.' , 'Ex. laundry, dishes, homework');

console.log(thingsToDo);

let remove = /\s*,\s*/;
let toDoList = thingsToDo.split(remove);

console.log(toDoList);
console.log(toDoList.length);

// // Using a for loop, change the items in the array by adding days they should be completed to each index.

let toDoDay = new Date();
for(let i=0; i<toDoList.length; i++){
  console.log(`${toDoList[i]} will take at least ${toDoDay.getDay()} days to do.` );
}

// Using a while loop, find the task that will take the longest and log it to the console.

let i = 0;
while(i < toDoList.length){
  if(toDoList[2]===toDoList[2]){
  let takesTheLongest = toDoList[2];
  console.log(`Doing ${takesTheLongest} will take the longest`);
  i++;
  }
}

// Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest


// Finally, alert all the tasks that are marked done in the todo array.



};
