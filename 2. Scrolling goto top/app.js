const $scroll = document.querySelector('.scroll-icon');
const $container = document.querySelector('.container');

// 스크롤을 보이게 만들겠다.
$scroll.style.display = 'block';

// 스크롤 버튼을 클릭했을 때 위로 부드럽게 이동한다.
$scroll.onclick = e => {
  console.log(e.target);
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
};

