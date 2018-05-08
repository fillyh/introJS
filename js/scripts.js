//call stack

// function nameMe(name){
//   console.log(this);
//   alert(name);
// }
//
// function listenToBeth(){
//   nameMe('Beth');
//   alert('NOOO!!!');
// }

// nameMe('Ryeker');

function nameMe(firstName, lastName){
  console.log(this.name, firstName, lastName);
}

var doc = document.querySelector('button').addEventListener('click' , (e) => {
console.log(this);
});

const myUser = {
  name: "felipe h",
  password: '2345',
  lastLoggedIn: new Date()
};

const xUser = {
  name: "felipe h",
  title: "cool guy"
};

nameMe.call(myUser, "Ryeker", "Herndon");
nameMe.call(xUser, 'ninja', 'turtle');
nameMe.call(xUser.name, myUser.password);


const myScope = {
  const div = document.querySelector('div');
  div.addEventListener('mouseOver', (e) => ({
    console.log(this);

  })
};
