import { urls } from './urls.js';

let cnt = 0;
const iFrame = document.querySelector('#iframe');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

function updateIframe() {
  iFrame.src = `https://${urls[cnt]}`;
  console.log(`URL: ${urls[cnt]}`);
}

// 다음 URL로 이동
function goNext() {
  cnt = (cnt + 1) % urls.length;
  updateIframe();
  resetTimer();
}

// 이전 URL로 이동
function goPrev() {
  cnt = (cnt - 1 + urls.length) % urls.length;
  updateIframe();
  resetTimer();
}

// 타이머 관련
let timer = null;
function startTimer() {
  timer = setTimeout(goNext, 180 * 1000); // 3분 후 자동으로 다음 URL
}
function resetTimer() {
  clearTimeout(timer);
  startTimer();
}

// 이벤트 핸들러 등록
next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);

// 초기화
updateIframe();
startTimer();
