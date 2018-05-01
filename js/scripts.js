// // let blueDivs = document.getElementsByClassName('blue');
// //
// // let h1= document.getElementsByTagName('h1');
// //
// // let para = document.getElementById('para');
// //
// // console.log(para);
// // // console.log(blueDivs[0]);
// // // console.log(h1[0]);
// //
// // let queryBlues = document.querySelector('#para');
// // console.log(queryBlues);
// //
// // let queryBlues2 = document.querySelectorAll('div');
// // console.log(queryBlues2);
//
// //
// // function queryDom() {
// //   let body = document.getElementsByTagName('body');
// //   console.log(body[0]);
// //   let myBody = document.getElementsByClassName('my-body');
// //   console.log(myBody);
// // }
// // queryDom();
//
// // function queryDom(element, method){
// //   let elementToQuery = document.method(element);
// //   console.log(body);
// // }
// // let el = prompt("Give me an element");
// // le
// // queryDom();
// /*wtf*/
// const button = document.querySelector('.btn-danger');
//
// function logTarget(e){
//   console.log(e.target);
// }
//
// button.addEventListener('click', (e) =>{
//   console.log(e);
//   console.log(e.target);//e.target refers to the actual button ... button info
//
// } //callback function because JS is being "called back"
// )

// const button = document.querySelector('.btn-danger');
//
// function logTarget(e){
//   console.log(e.target);
// }
//
// button.addEventListener('mouseup', (e) =>{
//   console.log(e);
//   // console.log(e.target);//e.target refers to the actual button ... button info
//
// } //callback function because JS is being "called back"
// )
// Create event listeners for each:
// For the button, alert the user with a message when they click it.
const button = document.querySelector('.my-btn');
const div = document.querySelector('.box');
const h1= document.querySelector('h1');

// button.addEventListener('click', (e) =>{
//   alert(`Hey! You Clicked on me! ${e.target}`);
// });
button.addEventListener('click', (e) =>{
  let newPTag = document.createElement('p');
  newPTag.textContent= "Hey there!";
  div.appendChild(newPTag);
  div.insertBefore(newPTag, h1);
});

h1.addEventListener('mouseup', (e) =>{
  h1.style.color='yellow';
});
div.addEventListener('mouseenter', (e) => {div.style.backgroundColor='red'
});







// For the div, change the color of the background when their mouse goes into the div.
// For the h1, change the color of the text the user releases any key.
