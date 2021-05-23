const icons = document.querySelectorAll(".section-1-icons i");

let interval = setInterval(scrollIcons, 2000);
let counter = 0;
const sectionOne = document.getElementsByClassName('section-1');
sectionOne[0].addEventListener('click', scrollIcons)

function scrollIcons() {
  counter++
  let currentIcon = document.querySelector('.show')
  currentIcon.classList.remove('show')
  // window.clearInterval(interval)

  if (counter === icons.length) {
    icons[0].classList.add('show')
    counter = 0
  } else {
    currentIcon.nextElementSibling.classList.add('show')
  }
}
