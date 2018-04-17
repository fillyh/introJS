alert("Welcome to the Geekwise Jedi Academy!")

let birthday = new Date (prompt("Before we begin, please enter you birthday" , "Ex. 11/12/1985"));
usersAge = birthday.getFullYear();
console.log(usersAge);

let over80;
let starWarsFan;


if (usersAge<1999){
  alert ("Hey! You are over 18! Proceed young Padawan.");
  over80 = confirm("Are you older than 80? \nHit OK for YES or CANCEL for NO");
  console.log(over80);
  if (over80===true){
    confirm("Do you like Matlock?");
    alert("I prefer Murder She Wrote \nBye!");
  } else{
    starWarsFan = confirm("Are you a Star Wars fan?");
    if (starWarsFan===true){
      alert("Impressive. Most impressive. Obi-Wan has taught you well.");
      alert("You'll make an excellent Jedi!")
    } else{
      alert("Consumed you, the darkside has.");
      alert("Train you I cannot");
    }
  }

} else {
  alert ("Sorry young Padawan, your training ends here.");
  alert("Remember: Your focus determines your reality.")

}
