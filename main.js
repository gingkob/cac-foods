const icons = document.querySelectorAll(".section-1-icons i");

let interval = setInterval(scrollIcons, 2000);
let counter = 0;
const sectionOne = document.getElementsByClassName('section-1');
sectionOne[0].addEventListener('click', scrollIcons)

function scrollIcons() {
  counter++
  let currentIcon = document.querySelector('.show')
  currentIcon.classList.remove('show')
  window.clearInterval(interval)

  if (counter === icons.length) {
    icons[0].classList.add('show')
    counter = 0
  } else {
    currentIcon.nextElementSibling.classList.add('show')
  }
  interval = newInterval();
}

function newInterval() {
  return setInterval(scrollIcons, 2000);
}

// let pCounter = document.getElementById("counter")
// let counter = 0.00;
// let interval = setInterval(letCount, 1);

// function letCount() {
//   counter += 0.01;
//   pCounter.innerText = counter.toFixed(2);
// }

// function pause() {
//   window.clearInterval(interval)
// }

// function resume() {
//   interval = setInterval(letCount, 1);
// }