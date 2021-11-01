

// 1a
const button1 = document.getElementById('one')

// 1b
button1.onclick = function (){
    alert(`Cool! You can hear/understand a hummingbird and ants`);
  }

// 2a
const h3 = document.querySelector('h3');

// 2b
h3.addEventListener(`mouseenter`, () => {
    h3.classList.toggle(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`);
  });

  // 3a
const form = document.querySelector(`form`);

// 3b


form.addEventListener(`submit`, f => {
    j.preventDefault();
})

console.log(form);
console.dir(form.elements.text.value);

const alertText = form.elements.text.value;

alertText.addEventListener('submit')
   alertText.classList.add(`value`)
