// Write a program that does the following:


// When the user clicks a button, prompt them for the a title.
document.getElementById('my-btn').addEventListener('click' , function(e){

let title = prompt('Hi! Type in a title.');
let h1 = document.querySelector('h1');

if(isNaN(title)){
document.querySelector('h1').textContent = title;
let paragraph = prompt('Type a few sentences');
let pTag = document.querySelector('p').textContent = paragraph;

}else {alert('Come on! Humor me!')
};

});



// Put that title into an h1 that is centered on the page.
// Ask the user to write a few sentences about what they did today.
// Populate a p tag with the sentences, align the p tag text with justify.
// Finally, ask the user for his or her favorite color, and set the background of the p tag to that color
// Remember, check for edge cases with color.
