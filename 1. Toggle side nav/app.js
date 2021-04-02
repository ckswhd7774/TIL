const $nav = document.querySelector('nav');


document.querySelector('.toggle').onclick = e => {
  $nav.classList.toggle('active');
  console.log(e.target);
}