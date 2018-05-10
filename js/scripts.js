// //set timeout in class assignment
//
// const quotes = ["you're great", "you're awesome!", "you da bomb!"];
//
// let i = 0;
// let timer;
// let interval;
//
//
// function promptUser(){
//   return parseInt(prompt("How long you want to wait?"));
// }
//
// promptUser();
//
// let userTimeOut = promptUser();
// !isNaN(userTimeOut) ? createTimeout(userTimeOut) : promptUser();
//
//
// function createTimeout(time){
//   timer = setTimeout(()=> {
//   alert(quotes[i]);
// }, time );
// }
// //Add an interval that prompts for a number of how often the user wants to be alerted and have the message change every time the alert happens.
//
// let userInterval = parseInt(prompt('how often should I repeat?'));
//
// !isNaN(userInterval) ? createTimeout(userTimeOut) : promptUser();
//
// function createInterval(time){
// timer =  setTimeout(()=> {
//   alert(quotes[i]);
//   i<4 ? i++ : i = 0;
// }, time );
// }
//
// const cancelTimeout = document.querySelector("#cancel-timeout");
// const cancelInterval = document.querySelector("#cancel-interval");
//
// cancelTimeout.addEventListener('click', () =>{
//   console.log(timer);
//   clearTimeout(timer);
//
//
// })
//
// cancelInterval.addEventListener('click', () =>{
//   console.log(timer);
//   clearInterval(timer);
// })
let user ={
  firstName: 'Bryan',
  lastName: 'hendriks',
  email: "ryekerjh@gmail.com",
  cart: [],
  lastLogin: Date.now()
};

sessionStorage.setItem('currentUser', JSON.stringify(user));

user = JSON.parse(sessionStorage.getItem('currentUser'));

let firstName = user.firstName;
console.log(firstName);
alert(`Hi ${firstName}, glad you're back!`);

function logout(){
  sessionStorage.removeItem('currentUser')
}
