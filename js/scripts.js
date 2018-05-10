// //call stack
//
// // function nameMe(name){
// //   console.log(this);
// //   alert(name);
// // }
// //
// // function listenToBeth(){
// //   nameMe('Beth');
// //   alert('NOOO!!!');
// // }
//
// // nameMe('Ryeker');
//
// function nameMe(firstName, lastName){
//   console.log(this.name, firstName, lastName);
// }
//
// var doc = document.querySelector('button').addEventListener('click' , (e) => {
// console.log(this);
// });
//
// const myUser = {
//   name: "felipe h",
//   password: '2345',
//   lastLoggedIn: new Date()
// };
//
// const xUser = {
//   name: "felipe h",
//   title: "cool guy"
// };
//
// nameMe.call(myUser, "Ryeker", "Herndon");
// nameMe.call(xUser, 'ninja', 'turtle');
// nameMe.call(xUser.name, myUser.password);
//
//
// const myScope = {
//   const div = document.querySelector('div');
//   div.addEventListener('mouseOver', (e) => ({
//     console.log(this);
//
//   })
// };
// let myString = new String('');
// console.log(String);
// console.log(myString);
//
// console.log(Object.getPrototypeOf(myString));


// const user = {
//   name: "Ryan",  //Key and value pair
//   password: "1234" //property and value
// };
//
// console.log(Object.getPrototypeOf(user));
//
// const user = [
// "Ryan",  //Key and value pair
//  "1234" //property and value
// ];
//
// Array.prototype.sayPurple = 'purple';
//
//
// console.log(user.sayPurple);
//
// console.log(Object.getPrototypeOf(user));
//
// function User(firstName, lastName, password, signUpDate) { // Constructors Title Case. They should always build an object, that object should alawyas hava the name of the function
//
//   this.fullName = firstName + lastName;
//   this.password = password;
//   this.signUpDate = new Date(signUpDate);
// }
//
// let firstUser = new User("ryeker", "herndon", "12345", "5/7/18");
// console.log(firstUser);
//
// function Cart(){
//
// }
//
// const firstName = document.forms.register.firstName; //review this later/
// const users = [];

function User(firstName, dueDate, priority){
  this.userName = firstName;
  this.dueDate = new Date();
  this.priority = priority;
}

let firstUser = new User ();
console.log(firstUser);

firstName = prompt("what's your name");
dueDate = prompt("enter today's date");
priority = prompt('high or low priority');
