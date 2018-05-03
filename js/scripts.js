// function checkForRed(element){
//   if(element.classList.contains('red-text')){
//     element.classList.remove('red-text');
//   } else {
//   //add red text
//   }
//
// }

// const myImg = document.querySelector('img');
//
//
// function changeImg(){
// myImg.setAttribute('src' , 'https://pbs.twimg.com/profile_images/927645314630193158/ufoYTbbi_400x400.jpg')
// }
//
// myImg.addEventListener('click', (e) => {
// changeImg()
// })

/*Fizz Buzz Test*/
// let fizz = 'Fizz';
// let buzz = 'buzz';
// let fizzbuzz = 'FizzBuzz';
//
// var i;
// for (i=0; i < 101; i++){
//
// }
// document.getElementById("h3").innerHTML = i;
// console.log();

// const body = document.querySelector('body');
//
// for (let i =1; i<=100; i++) {
//   let p = document.createElement('p');
//   if(i % 3 === 0 && i % 5 === 0){
//     p.textContent = 'FizzBuzz';
//   }else if(i % 3 === 0){
//     p.textContent = 'Fizz';
//   }else if (i % 5 === 0){
//     p.textContent = 'Buzz';
//   }else {
//     p.textContent = i;
//   }
//   body.appendChild(p);
// }


// console.log(document.forms.login.username.value);
document.forms.login.submit.addEventListener('click' , e  => {
  e.preventDefault();
  console.log(e.target.value);
});
