const $hour = document.querySelector('.hand.hour');
const $minute = document.querySelector('.hand.minute');
const $second = document.querySelector('.hand.second')

const timeoutId = setInterval(() => {
  let today = new Date();   
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes();  // 분
  let seconds = today.getSeconds();  // 초
  console.log(hours, minutes, seconds);
  // 1초당 6도씩 회전해야한다.
  $second.style.setProperty('--deg', seconds * 6 ) 
  // 1시간당 360도, 1분당 6도, 1초당 0.1도씩 회전해야한다.
  $minute.style.setProperty('--deg', minutes * 6 + seconds * 0.1)
  // 1시간당 30도, 분당 0.5도, 1초당 0.008도씩 회전해야한다.
  $hour.style.setProperty('--deg', hours * 30 + minutes * 0.5 + (0.5 / 60))  
}, 1000);
