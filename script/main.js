import { urls } from './urls.js';

let cnt = 0;
const iFrame = document.querySelector('#iframe');
iFrame.src = `https://${urls[cnt]}`;
const next = document.querySelector('#next');
next.addEventListener('click', () => {
  cnt++;
  if (cnt >= urls.length) cnt = 0;
  console.log(`URL: ${urls[cnt]}`);
  iFrame.src = `https://${urls[cnt]}`;
});
const prev = document.querySelector('#prev');
prev.addEventListener('click', () => {
  cnt--;
  if (cnt < 0) cnt = urls.length - 1;
  console.log(`URL: ${urls[cnt]}`);
  iFrame.src = `https://${urls[cnt]}`;
});
