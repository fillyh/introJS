
// Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius

let scale = prompt('Hi, type in a temperature scale', 'Celcius or Fahrenheit').toLowerCase();
let temperature = parseInt(prompt(`Cool. Now type in a tmeperature` , 123));

// Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.
//Whatever the user enters, I'll need to to make sure that it equals either scale. So lowercase and check to make sure they're equal. use a switch statement?

function convertTemps(scale, temperature){
  // Display the temperature in an h3 with minimal styling.
  let h3 = document.querySelector('h3');
  document.querySelector('h3').textContent = `${temperature} ${scale}`;

//   button.addEventListener('click', (e) => {
//
//
// });

};

convertTemps(scale, temperature);

// From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit.
// Display the converted temperature in the h3 each time it is changed.

//Day6 HW review
function convertTemp(scale, temp){
  scale = scale.toLowerCase();
  let returnVal;
  let oppositeVal = scale === 'c'? 'Fahrenheit' : 'Celcius';
  temp = parseInt(temp);
  if(!isNaN(temp)){
    formula
h3.innerText =
  }


}
