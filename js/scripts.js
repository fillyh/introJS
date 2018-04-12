firstName = prompt("Hey! Didn't I see you at BitWise? What was your first name again?");

console.log(firstName);

lastName = prompt("Oh! Hi " + firstName + "! So, like, what's your last name?");

alert(lastName + "! I knew it!");

usersBirthday = prompt("I'm not weird or anything, but what's your birthday" + " (Please enter it this way: MM/DD/YYYY ... I'm not that smart)");
rightNow = new Date (usersBirthday);

alert(rightNow)
