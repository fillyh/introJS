// Prompts your user for their name.
// Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
// Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.

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
    alert(usersName + " You know I saw her once in concert.");
		break;
  case "PURPLE":
  	alert("Purple rain, purple rain! Don't be shy " + usersName + " sing it loud! No one's watching!");
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
