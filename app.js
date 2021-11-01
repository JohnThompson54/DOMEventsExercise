

// 1a
/*const button1 = document.getElementById('one')

// 1b
button1.onclick = function (){
    alert(`Cool! You can hear/understand a hummingbird and ants`);
  }

// 2a
const h3 = document.querySelector(`h3`);


// 2b
 h3.addEventListener(`mouseenter`, () => {
    h3.classList.toggle(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`);
  }); 

// 2b
h3.addEventListener(`mouseenter`, () => {
    alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");
});

  // 3a
const form = document.querySelector(`form`);

// 3b

form.addEventListener(`submit`, () =>)

 form.addEventListener(`submit`, f => {
    j.preventDefault();
})



 console.log(form);
console.dir(form.elements.text.value);

const alertText = form.elements.text.value;

alertText.addEventListener('submit')
   alertText.classList.add(`value`) */



   // DOM Events Exercise provided answers
// 1a
const button1 = document.querySelector(`#one`);
// OR
// const button1 = document.getElementById(`one`);

// 1b
button1.onclick = function () {
  alert("Cool! You can hear/understand a hummingbird and ants");
}

// 2a
const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener(`mouseenter`, () => {
  alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");
});

// 3a
const form = document.querySelector(`form`);

// 3b
form.addEventListener(`submit`, () => {
  alert(`${form.elements.quote.value}`);
});
// OR
// form.addEventListener(`submit`, q => {
//   q.preventDefault();
//   alert(`${form.elements.quote.value}`);
//   form.elements.quote.value = ``;
// });

// BONUS
// 4a
const darkMode = document.querySelector(`#dm`);
// OR
// const darkMode = document.getElementById(`dm`);

// 4b
const everything = document.querySelectorAll(`*`);
// console.dir(everything);
darkMode.addEventListener(`click`, () => {
  for (elements of everything){
    elements.classList.toggle(`dark-mode`);
  }
});

// 5a
const reality = document.querySelector(`#reality`);
// OR
// const reality = document.getElementById(`reality`);

// 5b
let clickCount = 0;
reality.addEventListener(`click`, () => {
  clickCount++;
  if (clickCount < 3){
    alert("You have successfully moved to another reality");
  } else if (clickCount === 3){
    alert("OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!");
  }
});